import json


def update_json(en_path, ge_path, key_path, en_value, ge_value):
    with open(en_path, "r", encoding="utf-8") as file:
        en_data = json.load(file)

    with open(ge_path, "r", encoding="utf-8") as file:
        ge_data = json.load(file)

    path_parts = key_path.split(".")

    current_en = en_data
    for part in path_parts[:-1]:
        if part not in current_en:
            current_en[part] = {}
        current_en = current_en[part]
    current_en[path_parts[-1]] = en_value

    current_ge = ge_data
    for part in path_parts[:-1]:
        if part not in current_ge:
            current_ge[part] = {}
        current_ge = current_ge[part]
    current_ge[path_parts[-1]] = ge_value

    with open(en_path, "w", encoding="utf-8") as file:
        json.dump(en_data, file, ensure_ascii=False, separators=(",", ":"))

    with open(ge_path, "w", encoding="utf-8") as file:
        json.dump(ge_data, file, ensure_ascii=False, separators=(",", ":"))

    # print(f"Successfully added {path_parts[-1]}")
    # print(f"EN: {en_value}")
    # print(f"GE: {ge_value}")


def main():
    en_path = "public/i18n/en.json"
    ge_path = "public/i18n/ge.json"

    try:
        while True:
            key_path = input("Enter the key path: ")
            en_value = input("Enter English value: ")
            ge_value = input("Enter Georgian value: ")
            update_json(en_path, ge_path, key_path, en_value, ge_value)
            print("---")
    except KeyboardInterrupt:
        print("\nExiting...")


if __name__ == "__main__":
    main()
