# Pagination in Python

## Overview:
This project focuses on implementing pagination techniques in Python to efficiently handle large datasets. Three main tasks are covered:
1. Simple helper function: Implementing a function to calculate the start and end indices for pagination.
2. Simple pagination: Creating a class to paginate a dataset using basic page and page size parameters.
3. Hypermedia pagination: Extending the pagination class to include hypermedia metadata for enhanced navigation.
4. Deletion-resilient hypermedia pagination: Enhancing pagination to handle deletions in a resilient manner.

## Table of Contents:
1. [Simple Helper Function](#simple-helper-function)
2. [Simple Pagination](#simple-pagination)
3. [Hypermedia Pagination](#hypermedia-pagination)
4. [Deletion-Resilient Hypermedia Pagination](#deletion-resilient-hypermedia-pagination)
5. [Acknowledgement](#acknowledgement)

## 1. Simple Helper Function:
The `index_range` function calculates the start and end indices for pagination based on the given page and page size parameters.

## 2. Simple Pagination:
The `Server` class provides methods to paginate a dataset using basic page and page size parameters. It includes error handling for invalid input arguments and utilizes the `index_range` function to determine the appropriate data range for each page.

## 3. Hypermedia Pagination:
An extension of the pagination class is implemented to include hypermedia metadata in the response. The `get_hyper` method returns a dictionary containing page information along with links to the next and previous pages, total page count, and current page size.

## 4. Deletion-Resilient Hypermedia Pagination:
The `get_hyper_index` method handles pagination in a deletion-resilient manner by providing the current start index, next index, page size, and data. It ensures that users do not miss items from the dataset when changes occur between queries.

## Acknowledgement:
Special thanks to the ALX School for providing the opportunity to work on this project and enhance skills in Python programming and pagination techniques.

