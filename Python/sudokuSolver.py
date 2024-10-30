class Solution(object):
    def solveSudoku(self, board):
        def isValid(num, row, col):
            for i in range(9):
                if board[row][i] == num:
                    return False
            for i in range(9):
                if board[i][col] == num:
                    return False
            start_row, start_col = 3*(row//3), 3*(col//3)
            for i in range(3):
                for j in range(3):
                    if board[start_row+i][start_col+j]==num:
                        return False
            return True

        def solve():
            for i in range(9):
                for j in range(9):
                    if board[i][j] == '.':
                        for num in '123456789':
                            if isValid(num, i, j) :
                                board[i][j] = num
                                if solve():
                                    return True
                                board[i][j] = '.'
                        return False
            return True
        solve()