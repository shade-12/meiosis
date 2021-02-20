from backend.generate_urls import generate_related_sites
from backend.parse_site_keywords import parse_site_keywords


def lambda_handler(event, context):
    ori_url = event['url']
    ori_kws = parse_site_keywords(ori_url)

    ret = []
    # get and format related sites
    for site in generate_related_sites(ori_url, ori_kws):
        ret.append({
            'title': site[0],
            'link': site[1],
            'is_opposite': False
        })

    return {
        'statusCode': 200,
        'body': {
            'sites': ret
        }
    }
