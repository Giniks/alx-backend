# Caching Systems

This repository contains Python implementations of various caching systems. Each caching system is designed to store and manage data using different eviction policies to optimize performance and resource utilization.

## Table of Contents
- [Basic Cache](#basic-cache)
- [FIFO Cache](#fifo-cache)
- [LIFO Cache](#lifo-cache)
- [LRU Cache](#lru-cache)
- [MRU Cache](#mru-cache)

## Basic Cache

### Description
The Basic Cache is a simple caching system that inherits from BaseCaching. It stores key-value pairs in a dictionary and has no limit on the number of items it can hold.

### Features
- `put(self, key, item)`: Assigns the `item` value to the `key` in the cache.
- `get(self, key)`: Retrieves the value linked to the `key` from the cache.

## FIFO Cache

### Description
The FIFO Cache is a caching system that implements the First-In, First-Out (FIFO) eviction policy. It discards the first item added to the cache when it reaches its maximum capacity.

### Features
- `put(self, key, item)`: Assigns the `item` value to the `key` in the cache. If the cache is full, it discards the oldest item using the FIFO algorithm.
- `get(self, key)`: Retrieves the value linked to the `key` from the cache.

## LIFO Cache

### Description
The LIFO Cache is a caching system that implements the Last-In, First-Out (LIFO) eviction policy. It discards the last item added to the cache when it reaches its maximum capacity.

### Features
- `put(self, key, item)`: Assigns the `item` value to the `key` in the cache. If the cache is full, it discards the most recently added item using the LIFO algorithm.
- `get(self, key)`: Retrieves the value linked to the `key` from the cache.

## LRU Cache

### Description
The LRU Cache is a caching system that implements the Least Recently Used (LRU) eviction policy. It discards the least recently accessed item from the cache when it reaches its maximum capacity.

### Features
- `put(self, key, item)`: Assigns the `item` value to the `key` in the cache. If the cache is full, it discards the least recently used item using the LRU algorithm.
- `get(self, key)`: Retrieves the value linked to the `key` from the cache.

## MRU Cache

### Description
The MRU Cache is a caching system that implements the Most Recently Used (MRU) eviction policy. It discards the most recently accessed item from the cache when it reaches its maximum capacity.

### Features
- `put(self, key, item)`: Assigns the `item` value to the `key` in the cache. If the cache is full, it discards the most recently used item using the MRU algorithm.
- `get(self, key)`: Retrieves the value linked to the `key` from the cache.


