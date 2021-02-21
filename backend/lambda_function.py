from backend.find_antonyms import get_antonyms_list
from backend.generate_site_obj import generate_site_objects
from backend.generate_urls import generate_related_sites
from backend.parse_site_keywords import parse_site_keywords


def lambda_handler(event, context):
    ori_url = event['url']
    ori_kws, ori_cite = parse_site_keywords(ori_url)

    ret = []
    # get and format related sites
    for site in generate_related_sites(ori_url, ori_kws):
        ret.append({
            'title': site[0],
            'link': site[2],
            'snippet': site[1],
            'is_opposite': False
        })

    # opposite sites
    ori_kws.add('anti')
    for site in generate_related_sites(ori_url, ori_kws):
        ret.append({
            'title': site[0],
            'link': site[2],
            'snippet': site[1],
            'is_opposite': True
        })
    ori_kws.remove('anti')

    generate_site_objects(ret)

    return {
        'statusCode': 200,
        'body': {
            'sites': ret,
            'keywords': list(ori_kws),
            'citation': ori_cite
        },
        "isBase64Encoded": False
    }


if __name__ == '__main__':
    e = {
        'url':
            'https://www.peta.org/issues/animals-used-for-food/animals-used-food-factsheets/vegetarianism-environment/'
    }
    print(lambda_handler(e))
