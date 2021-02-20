import json
import requests


def lambda_handler(event, context):
    x = requests.get("https://jsonplaceholder.typicode.com/posts")

    return {
        'statusCode': 200,
        'body': json.dumps(x.status_code)
    }
