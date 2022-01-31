//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Tweeter {
    string private tweet;

    constructor(string memory _tweet) {
        console.log("Deploying a Tweeter with tweet:", _tweet);
        tweet = _tweet;
    }

    function tweety() public view returns (string memory) {
        return tweet;
    }

    function setTweet(string memory _tweet) public {
        console.log("Changing tweet from '%s' to '%s'", tweet, _tweet);
        tweet = _tweet;
    }
}
