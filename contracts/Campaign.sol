// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "./ICOToken.sol";

contract Campaign {
    struct Project {
        uint id;
        address owner;
        string title;
        uint goal;
        uint launchDay;
        string story;
        uint maxReachTime;
        uint numOfContributers;
        uint tokenValue;
        Request[] requests;
        ICOToken icoToken;
        address[] contributors;
        uint funds;
    }
    Project[] public projects;
    mapping(uint => mapping(address => uint)) contributors; // project ID => account address => amount of contribution
    struct Request {
        uint id;
        string description;
        uint amount;
        address payable recipient;
        string status;
        bool completed;
        uint approvalsNum;
        address[] voters;
    }
    mapping(uint => mapping(uint => mapping(address => bool))) requestApprovals; // project ID => request ID => account => bool

    function createProject(string memory _title, uint _goal, string memory _story, uint _maxReachTime, uint _tokenValue, uint _totalICOSupply) external {
        uint newID = projects.length;
        ICOToken newICOToken = new ICOToken(address(this), _totalICOSupply);
        Project storage project = projects.push();
        project.id = newID;
        project.owner = msg.sender;
        project.title = _title;
        project.goal = _goal;
        project.story = _story;
        project.maxReachTime = _maxReachTime;
        project.tokenValue = _tokenValue;
        project.launchDay = block.timestamp;
        project.icoToken = ICOToken(newICOToken);
        project.funds = 0;
    }

    function getProjects() external view returns(Project[] memory){
        return projects;
    }

    function contribute(uint _id) external projectExists(_id) payable {
        Project storage project = projects[_id];
        if(block.timestamp > project.maxReachTime) {
            revertAllContributions(_id);
            revert("This project doens't accept contributions anymore");
        }        
        require(contributors[_id][msg.sender] == 0, "You are already a contributor");
        require(msg.value >= project.tokenValue, "Your current contribution doesn't even worth 1 token");
        require(project.funds < project.goal, "Goal reached");
        uint tokens = msg.value / project.tokenValue;
        require(project.icoToken.balanceOf(address(this)) >= tokens, "No sufficiant tokens left");

        if(!project.icoToken.transfer(msg.sender, tokens)) {
            revert("Token transfer failed");
        }
        contributors[_id][msg.sender] = msg.value;
        project.contributors.push(msg.sender);
        project.numOfContributers++;
        project.funds += msg.value;
    } 

    function createRequest(uint _projectID, string memory _description, uint _amount, address _recipient) external projectExists(_projectID) onlyOwner(_projectID) {
        Project storage project = projects[_projectID];
        require(project.funds >= project.goal, "Goal not reached yet");
        require(_recipient != address(0), "Invalid Recipient address");
        require(_amount <= project.funds, "No sufficiant balance");

        uint newID = project.requests.length;
        Request storage request = project.requests.push();
        request.id = newID;
        request.description = _description;
        request.amount = _amount;
        request.recipient = payable(_recipient);
        request.status = "pending";
        request.approvalsNum = 0;
        request.completed = false;
    }

    function approveRequest(uint _projIndex, uint _reqIndex) external projectExists(_projIndex) onlyContributor(_projIndex) reqExists(_projIndex, _reqIndex) {
        Project storage project = projects[_projIndex];
        Request storage request = project.requests[_reqIndex];
        require(!requestApprovals[_projIndex][_reqIndex][msg.sender], "You already approved this request");
        require(!request.completed, "This request already got enough votes and it is executed");
        requestApprovals[_projIndex][_reqIndex][msg.sender] = true;
        request.approvalsNum++;
        request.voters.push(msg.sender);
        if(request.approvalsNum > (project.contributors.length / 2)) {
            finalizeRequest(_projIndex, _reqIndex);
        }
    }    

    function finalizeRequest(uint _projID, uint _reqID) private {
        Project storage project = projects[_projID];
        Request storage request = project.requests[_reqID];
        require(!request.completed, "Request already finalized");
        request.status = "approved";
        (bool success, ) = request.recipient.call{value: request.amount}("");
        require(success, "Ether transfer failed");
    }

    function revertAllContributions(uint _id) private {
        Project storage project = projects[_id];
        for(uint i=0; i<project.contributors.length; i++) {
            address contributor = project.contributors[i];
            uint contributeValue = contributors[_id][contributor];
            contributors[_id][contributor] = 0;
            (bool success, ) = payable(contributor).call{value:contributeValue}("");
            require(success, "Ether transfer failed");
        }
    }

    modifier onlyOwner(uint _id) {
        Project memory project = projects[_id];
        require(msg.sender == project.owner, "Only owner can invoke this function");
        _;
    }

    modifier onlyContributor(uint _projectID) {
        Project memory project = projects[_projectID];
        require(contributors[_projectID][msg.sender] > 0, "Only contributor can perform this action");
        _;
    }

    modifier reqExists(uint _projectId, uint _index) {
        Project memory project = projects[_projectId];
        require(_index < project.requests.length, "Request does not exist");
        _;
    }

    modifier projectExists(uint _id) {
        require(_id < projects.length, "Project doesn't exist");
        _;
    }
}