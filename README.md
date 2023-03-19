# Decentralized Crowdfunding Compaign Management

Decentralized Crowdfunding Compaign Management application.

## Problematic

It happens a lot, you have an idea, a great one that could have an impact in our real life. But... again, you face funding problems. <br />
Self-funding is incredibly limited. Bank funding requires having an existing business that has good revenues, so you may think of using existing platforms that connect you with potential investors who are ready to contribute to the success of your project in exchange for a favor/offer you will do after the success of your project. Some example platforms, *Kickstarter*, *GoFundMe*, *Indiegogo*.However, there still problems and risks exist, such as :
1. Crowdfunding platforms can be safe havens for money launderers behind the facade of investors.
2. Relying on trust, *__too much trust*. Unfortunately, the promises given by the projects' owners can be broken. Multiple highly popular crowdfunding campaigns have turned out to be scams, people never get the products they paid for.
3. Crowdfunding platforms are also vulnerable to attacks from hackers and cyber-criminals.
4. Lack of transparency and track of the project's development cycle. The contributor has the right to see where his money is going, and what's being done using them, and he has the right to keep track of the project's development cycle, something that doesn't exist in current platforms.

## Suggested Solution

Our solution is based on the blockchain technology and many decentralized concepts(`Escrow contract`, `decentralized vote`, `ICO tokens`) that will be covered later. And the fact the it is built in top of blockchain, the 4th problem is almost solved, as the technology provides full transparency, so currency movement can be tracked by design. <br />
We implemented along an `ICO` tokens, or `Initial Coin offering` token, a contributor is exchanging his ether with amount of `utility ICO tokens` that will provide him with equity and some other benifits defined by the project's owner, and these can be redeemed automatically in the future once the product is launched. For instance, if the project concerns building a hotel, the ICO tokens may offer its stakeholders apartments.


The campaign crowdfunding is characterized by:
- **The owner** of the compaign
- **The title** of the project
- **The story** of the project(description)
- **The goal to reach** (the amount needs to be collected to start the project)
- **Number of contributers**
- **Contributers list**
- **Launch day**(the time it is created in the platform)
- **Goal reach max time**(the deadline by wich the gaol must be fulfilled)
- **The ICO token contract** that manges tokens

We have created a [standard ICO token contract](./contracts/ICOToken.sol). In the create campaign form, the user needs only to specify the **totalSupply** for the ICO contract, and it will be then created automatically and associated to the campaign contract.<br />

After each new funding to the campaign, the funds are locked inside the smart contract(**Escrow contract**), and they will be used **only if the goal is reached before the maxReachTime**. If the goal isn't reached, all the already investors will be withdrawn, and the campaign will no longer accept new funding.

After the goal is reached *__meaning that the campaign got a value of ether greater or equal to the `goal` before the `goal max time`*, the project will be built in `milestones`, each milestone has a Request created by the project's owner to withdraw `x` amount of ether from the contract to the recipient's address. The request contains the following information:
- **Description**: the milestone purpose, and what's gonna be done after completing it
- Amount: Amount of ether needed to be withdrawn
- **Recipinet**: An address of the receiver of the `amount`(this could help track the recipient and make sure that money is indeed going to the right place).
- **Completed**: A boolean value indicates whether the request is completed or not.
- **Approvals**: a mapping between the addresses of the contributors who voted for the request.
- **ApprovalsNum**: number of approvals

After the request is created, a **decentralized vote** will start between the contributors, and after `x` amount of approvals is reached, the request will be executed. The `x` amount of approvals required is defined in advance(on the contract creation).

We believe that our solution addresses the mentioned problems and give them: let's not say a perfect solution, but the base line to provide that perfect solution we are looking for.

### Future improvements

Our solution is not that perfect *yet*, there are some features we will add slowly but surely, such as:
- Upgrading the smart contract to implement **work tokens** that will enable the stakeholders to have a decision in the direction of the campaign.


### How to start the development locally