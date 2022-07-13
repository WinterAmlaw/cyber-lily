#DISPLAY BOARD
 
def board(index):
    clear_output()
   
   
    print(' ' + index[1] + ' | ' + index[2] + ' | ' + index[3])
    print(' ' + index[4] + ' | ' + index[5] + ' | ' + index[6])
    print(' ' + index[7] + ' | ' + index[8] + ' | ' + index[9])
   
#test_board = ['','X','O','X','O','X','O','X','O','X']
#board(test_board)

#NEED TO DEFINE PLAYER TYPE X OR O

def player_type():
   
    p_type = ''
   
    while not (p_type == 'X' or p_type == 'O'):
        p_type = input('Choose X or O:').upper()
       
        if p_type == 'X':
            return ['X','O']
        else:
            return ['O','X']
 
 #INSERT MARKER

def insert_marker(index, marker, position):
    index[position] = marker

#CHECK FOR WIN

def win_check(index,mark):
   
    return ((index[7] == mark and index[8] == mark and index[9] == mark) or # across the top
    (index[4] == mark and index[5] == mark and index[6] == mark) or # across the middle
    (index[1] == mark and index[2] == mark and index[3] == mark) or # across the bottom
    (index[7] == mark and index[4] == mark and index[1] == mark) or # down the left side
    (index[8] == mark and index[5] == mark and index[2] == mark) or # down the middle
    (index[9] == mark and index[6] == mark and index[3] == mark) or # down the right side
    (index[7] == mark and index[5] == mark and index[3] == mark) or # diagonal
    (index[9] == mark and index[5] == mark and index[1] == mark)) # diagonal

def space_check(index, position):
   
    return index[position] == ' '

import random

def choose_first():
    if random.randint(0, 1) == 0:
        return 'Player 2'
    else:
        return 'Player 1'
 

def full_board_check(board):
    for i in range(1,10):
        if space_check(board, i):
            return False
    return True

   
def p_choice(index):
    position = 0
   
    while position not in list(range(1,10)) or not space_check(index, position):
        position = int(input('Choose position 1-9:'))
    return position

def replay():
   
    return input('Do you want to play again? Enter Yes or No: ').lower().startswith('y')


while True:
    # Reset the board
    theBoard = [' '] * 10
    player1_marker, player2_marker = player_type()
    turn = choose_first()
    print(turn + ' will go first.')
   
    play_game = input('Are you ready to play? Enter Yes or No.')
   
    if play_game.lower()[0] == 'y':
        game_on = True
    else:
        game_on = False

    while game_on:
        if turn == 'Player 1':
            # Player1's turn.
           
            board(theBoard)
            position = p_choice(theBoard)
            insert_marker(theBoard, player1_marker, position)

            if win_check(theBoard, player1_marker):
                board(theBoard)
                print('Congratulations! You have won the game!')
                game_on = False
            else:
                if full_board_check(theBoard):
                    board(theBoard)
                    print('The game is a draw!')
                    break
                else:
                    turn = 'Player 2'

        else:
            # Player2's turn.
           
            board(theBoard)
            position = p_choice(theBoard)
            insert_marker(theBoard, player2_marker, position)

            if win_check(theBoard, player2_marker):
                board(theBoard)
                print('Player 2 has won!')
                game_on = False
            else:
                if full_board_check(theBoard):
                    board(theBoard)
                    print('The game is a draw!')
                    break
                else:
                    turn = 'Player 1'

    if not replay():
        break
