// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    uint256 private _count;

    event SetCounter(uint256, uint256);

    function set(uint256 value) external returns (bool) {
        emit SetCounter(_count, value);
        _count = value;
        return true;
    }

    function inc() external returns (uint256) {
        uint256 afterValue = _count + 1;
        emit SetCounter(_count, afterValue);
        _count = afterValue;
        return afterValue;
    }

    function get() external view returns (uint256) {
        return _count;
    }
}
