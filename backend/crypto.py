from pathlib import Path
from cryptography.fernet import Fernet


key = ''
file_name = 'crypto.txt'
check_file = Path(f'key/{file_name}')
if not check_file.is_file():
    key = Fernet.generate_key()
    with open(f'key/{file_name}', 'w', encoding='utf-8') as file:
        file.write(key.decode())
else:
    with open(f'key/{file_name}', 'r', encoding='utf-8') as file:
        key = file.read().strip().encode()


fernet = Fernet(key)


def encoding(string: str):
    enstring = fernet.encrypt(string.encode())
    return enstring


def decoding(crypto_string):
    destring = fernet.decrypt(crypto_string)
    return destring







