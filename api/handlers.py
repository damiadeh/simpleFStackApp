def multiple_of_5():
    return "L"

def multiple_of_7():
    return "R"

def combo_of_5and7():
    return "LR"

def default():
    return ""

switcher = {
    'L': multiple_of_5,
    'R': multiple_of_7,
    'LR': combo_of_5and7,
    }

def switch(random_int):
    letter = ''
    if random_int % 5 == 0 and random_int % 7 == 0:
        letter = 'LR'   
    elif random_int % 5 == 0:
        letter = 'L'
    elif random_int % 7 == 0:
        letter = 'R'

    return switcher.get(letter, default)()