import json

print('Command line successfully launched.')
ans = 0
while True:
    s = input('>>>')
    if s.split()[0] == "change":
        if s.split()[1] == "LED":
            with open('data.json', mode='r') as file:
                data = json.load(file)
            try:
                data["LED"] = int(s.split()[2])
                with open('data.json', mode='w+') as file:
                    json.dump(data, file)
            except Exception:
                print('Error : Incorrect number')
        elif s.split()[1] == "DNAT":
            with open('data.json', mode='r') as file:
                data = json.load(file)
            try:
                data["DNAT"] = int(s.split()[2])
                with open('data.json', mode='w+') as file:
                    json.dump(data, file)
            except Exception:
                print('Error : Incorrect number')
        else:
            print('Error : Incorrect variable')
    elif s == 'stop':
        break
    elif s == 'help':
        print('Commands :\nhelp - show command list\nstop - stop command line\nchange [variable name] [value] - changes variable value')
    else:
        try:
            ans = eval(s, {"ans":ans})
            print(ans)
        except Exception:
            print('Error : Unknown command')
print('Command line successfully stopped.')