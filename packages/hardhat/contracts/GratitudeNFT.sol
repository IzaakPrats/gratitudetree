//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

import {Base64} from "./libraries/Base64.sol";
import {StringUtil} from "./libraries/StringUtil.sol";
 
contract GratitudeNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    event NewGratitudeMinted(address sender, uint256 tokenId, GratitudeData tokenData);

    struct GratitudeData {
        address creator;
        string title;
        string message;
        string location;
        uint256 timestamp;
    } 

    struct GratitudeDataWithTokenId {
        address creator;
        string title;
        string message;
        string location;
        uint256 timestamp;
        uint256 tokenId;
    } 

    mapping(uint256 => GratitudeData) private _gratitudeData;
    uint256 _totalGratitudes;
    
    string private _baseSvg =
        "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 24px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";
    

    constructor() ERC721("GratitudeNFT", "Gratitude") { }

    function metadata(uint256 _tokenId) public view returns (GratitudeData memory) {
        require(_tokenId < _tokenIdCounter.current(), "Invalid token Id.");
        return _gratitudeData[_tokenId];
    }

    //TODO This logic won't work if tokens are burned. Update _burn cleanup logic.
    function getLatestGratitudeData(uint32 _maxNumber) public view returns (GratitudeDataWithTokenId[] memory) {
        uint256 numGratitudes = _maxNumber;
        if (numGratitudes > _totalGratitudes) {
            numGratitudes = _totalGratitudes;
        }

        GratitudeDataWithTokenId[] memory latestGratitudeData = new GratitudeDataWithTokenId[](numGratitudes);

        uint256 counter = _totalGratitudes;
        uint256 i = 0;
        GratitudeData memory gratitudeData;
        for (counter; counter >= _totalGratitudes - numGratitudes + 1; counter--) {
            gratitudeData = _gratitudeData[counter];
            latestGratitudeData[i] = GratitudeDataWithTokenId({
                tokenId: counter,
                creator: gratitudeData.creator,
                title: gratitudeData.title,
                message: gratitudeData.message,
                location: gratitudeData.location,
                timestamp: gratitudeData.timestamp
            });
            i++;
        }

        return latestGratitudeData;
    }

    function mint(string memory _title, string memory _message, string memory _location) public {
        _tokenIdCounter.increment();

        uint256 newNftId = _tokenIdCounter.current();
        _safeMint(msg.sender, newNftId);

        GratitudeData memory data = GratitudeData({
            creator: msg.sender,
            title: _title,
            message: _message,
            location: _location,
            timestamp: block.timestamp
        });
        _gratitudeData[newNftId] = data;
        _totalGratitudes++;


        emit NewGratitudeMinted(msg.sender, newNftId, data);
    }

    function tokenURI(uint256 _tokenId) public view virtual override returns (string memory) {
        require(_exists(_tokenId), "ERC721Metadata: URI query for nonexistent token");

        string memory finalSvg = string(
            abi.encodePacked(_baseSvg, "GratitudeNFT", "</text></svg>")
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "',
                        // We set the title of our NFT as the generated word.
                        _gratitudeData[_tokenId].title,
                        '", "description": "',_gratitudeData[_tokenId].message,'", "image": "data:image/svg+xml;base64,',
                        // We add data:image/svg+xml;base64 and then append our base64 encode our svg.
                        Base64.encode(bytes(finalSvg)),
                        '"}'
                    )
                )
            )
        );

        string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        return finalTokenUri;
    }
}
