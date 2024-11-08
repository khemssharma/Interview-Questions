def solveNQueens(n):
    def backtrack(row, cols, diagonals1, diagonals2, board):
        if row == n:
            result.append(["".join(row) for row in board])
            return
        
        for col in range(n):
            if col in cols or (row - col) in diagonals1 or (row + col) in diagonals2:
                continue
            
            # Choose
            board[row][col] = 'Q'
            cols.add(col)
            diagonals1.add(row - col)
            diagonals2.add(row + col)

            # Explore
            backtrack(row + 1, cols, diagonals1, diagonals2, board)

            # Un-choose
            board[row][col] = '.'
            cols.remove(col)
            diagonals1.remove(row - col)
            diagonals2.remove(row + col)

    result = []
    board = [["."] * n for _ in range(n)]
    backtrack(0, set(), set(), set(), board)
    return result