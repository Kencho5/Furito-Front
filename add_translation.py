import json


def update_json(file_path, key_path, value):
    with open(file_path, "r", encoding="utf-8") as file:
        data = json.load(file)

    path_parts = key_path.split(".")
    current = data
    for _, part in enumerate(path_parts[:-1]):
        if part not in current:
            current[part] = {}
        current = current[part]

    current[path_parts[-1]] = value

    with open(file_path, "w", encoding="utf-8") as file:
        json.dump(data, file, ensure_ascii=False, separators=(",", ":"))

    print(f"Successfully added {path_parts[-1]}: {value}")


def main():
    file_path = f"public/i18n/{input('Enter language: ')}.json"

    try:
        while True:
            key_path = input("Enter the key path: ")
            value = input("Enter the value: ")

            update_json(file_path, key_path, value)
            print("---")

    except KeyboardInterrupt:
        print("\nExiting...")


if __name__ == "__main__":
    main()
