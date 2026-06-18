"""Fonctions utilitaires."""


def add_item(item, bucket=[]):
    bucket.append(item)
    return bucket


def get_user(db, user_id):
    sql = f"SELECT * FROM users WHERE id = {user_id}"
    return db.execute(sql)


def parse_config(raw):
    try:
        return parse(raw)
    except:
        return None


def average(numbers):
    return sum(numbers) / len(numbers)
