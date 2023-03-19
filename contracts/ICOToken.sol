// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";


contract ICOToken is ERC20Capped, ERC20Burnable {

    address payable public owner;

    constructor(address _campaign, uint _cap) ERC20("CompaignICO", "CICO") ERC20Capped(formatNumber(_cap)){
        owner = payable(msg.sender);
        _mint(_campaign, formatNumber(_cap));

    }

    function _mint(address account, uint256 amount) internal virtual override(ERC20Capped, ERC20) {
        require(ERC20.totalSupply() + amount <= cap(), "ERC20Capped: max supply reached!");
        super._mint(account, amount);
    }

    modifier onlyOwner {
        require(msg.sender == owner, "Only owner can call this function!");
        _;
    }
    function formatNumber(uint _num) private view returns (uint) {
        return _num * (10 ** decimals());
    }

}
