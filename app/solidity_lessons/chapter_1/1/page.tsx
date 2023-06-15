"use client"

import LayoutButtons from "@/app/common_components/layoutButtons"
import EditorPanel from "../../../common_components/editorPanel"
import TwoPanelLayout from "../../../common_components/twoPanelLayout"
import CodeSnippet from "@/app/common_components/codeSnippet"
import { LessonInfo, TabInfo } from "@/app/common_components/tab"

const codeBlock = `
pragma solidity ^0.7.0;
contract HelloWorld {
  string public message; 
}
`

const lessonInfo: LessonInfo = {
  "lessonName": {
    "defaultTab": 0,
    "tabs": [
      {
        "tabName": "erc721",
        "language": "sol",
        "defaultValue": `// SPDX-License-Identifier: MIT

              pragma solidity ^0.8.0;
              
              import "./IERC721.sol";
              import "./IERC721Receiver.sol";
              import "./extensions/IERC721Metadata.sol";
              import "../../utils/Address.sol";
              import "../../utils/Context.sol";
              import "../../utils/Strings.sol";
              import "../../utils/introspection/ERC165.sol";
              
              /**
               * @dev Implementation of https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard, including
               * the Metadata extension, but not including the Enumerable extension, which is available separately as
               * {ERC721Enumerable}.
               */
              contract ERC721 is Context, ERC165, IERC721, IERC721Metadata {
                  using Address for address;
                  using Strings for uint256;
              
                  // Token name
                  string private _name;
              
                  // Token symbol
                  string private _symbol;
              
                  // Mapping from token ID to owner address
                  mapping (uint256 => address) private _owners;
              
                  // Mapping owner address to token count
                  mapping (address => uint256) private _balances;
              
                  // Mapping from token ID to approved address
                  mapping (uint256 => address) private _tokenApprovals;
              
                  // Mapping from owner to operator approvals
                  mapping (address => mapping (address => bool)) private _operatorApprovals;
              
                  /**
                   * @dev Initializes the contract by setting a \`name\` and a \`symbol\` to the token collection.
                   */
                  constructor (string memory name_, string memory symbol_) {
                      _name = name_;
                      _symbol = symbol_;
                  }
              
                  /**
                   * @dev See {IERC165-supportsInterface}.
                   */
                  function supportsInterface(bytes4 interfaceId) public view virtual override(ERC165, IERC165) returns (bool) {
                      return interfaceId == type(IERC721).interfaceId
                          || interfaceId == type(IERC721Metadata).interfaceId
                          || super.supportsInterface(interfaceId);
                  }
              
                  /**
                   * @dev See {IERC721-balanceOf}.
                   */
                  function balanceOf(address owner) public view virtual override returns (uint256) {
                      require(owner != address(0), "ERC721: balance query for the zero address");
                      return _balances[owner];
                  }
              
                  /**
                   * @dev See {IERC721-ownerOf}.
                   */
                  function ownerOf(uint256 tokenId) public view virtual override returns (address) {
                      address owner = _owners[tokenId];
                      require(owner != address(0), "ERC721: owner query for nonexistent token");
                      return owner;
                  }
              
                  /**
                   * @dev See {IERC721Metadata-name}.
                   */
                  function name() public view virtual override returns (string memory) {
                      return _name;
                  }
              
                  /**
                   * @dev See {IERC721Metadata-symbol}.
                   */
                  function symbol() public view virtual override returns (string memory) {
                      return _symbol;
                  }



              `
      },
      {
        "tabName": "test2",
        "language": "sol",
        "defaultValue": `pragma solidity ^0.8.0;`,
        "correctValue": "pragma solidity ^0.8.2;"
      },
      {
        "tabName": "test3",
        "language": "html",
        "defaultValue": `<div class="flex-container">
  <div class="flex-item"><div></div></div>
  <div class="flex-item"><div></div></div>
  <div class="flex-item"><div></div></div>
  <div class="flex-item"><div></div></div>
  <div class="flex-item"><div></div></div>
  <div class="flex-item"><div></div></div>
</div>
        `
      }
    ]
  }
}

export default function Page() {
  return (
    <TwoPanelLayout>
      <div className="m-6">
        <div className="lesson-content">
          <h1 className="font-bold">Chapter 1: Lesson Overview</h1>
          <p>{"In Lesson 1, you\'re going to build a \"Zombie Factory\" to build an army of zombies.\""}</p>
          <ul className="list-disc ps-5">
            <li className="ps-2">Our factory will maintain a database of all zombies in our army</li>
            <li className="ps-2">Our factory will have a function for creating new zombies</li>
            <li className="ps-2">Each zombie will have a random and unique appearance</li>
          </ul>
          <p>{"In later lessons, we\'ll add more functionality, like giving zombies the ability to attack humans or other zombies! But before we get there, we have to add the basic functionality of creating new zombies."}</p>
          <h2>
            {"How Zombie DNA Works"}
          </h2>
          <p>{"The zombie's appearance will be based on its \"Zombie DNA\". Zombie DNA is simple — it's a 16-digit integer, like:"}</p>
          <code className="flex grow backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-300/30 lg-rounded">8356281049284737</code>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>

          <CodeSnippet codeBlock={codeBlock} language="solidity" />
        </div>
        <LayoutButtons
          prevRoute="/solidity_lessons/chapter_1"
          nextRoute="/solidity_lessons/chapter_1/2" />
      </div>
      <EditorPanel lessonInfo={lessonInfo} />
    </TwoPanelLayout>
  )
}