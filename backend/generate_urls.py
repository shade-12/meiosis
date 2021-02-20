import requests
import os
from typing import Set, List, Tuple
from backend.parse_site_keywords import parse_site_keywords

SERP_API_URL = 'https://serpapi.com/search'
SERP_API_KEY = os.environ['SERP_API_KEY']
RET_SITES_COUNT = 4


def generate_related_sites(origin: str, keywords: Set[str]) -> List[Tuple[str, str]]:
    """ Returns a list of relative sites from the input keywords.

    :param origin: the original site url
    :param keywords: set of string that denotes the keywords
    :return: a list of (site title, url string)s that denotes the relative sites
    """
    search_str = ' '.join(keywords)
    search_res = requests.get(SERP_API_URL, {
        'engine': 'google',
        'api_key': '95ba77e0c305ed8f2e4bec27de1445f02e36ad3693c32e15d6e95ee5f33cbd1b',
        'q': search_str,
        'location': 'Vancouver'
    }).json()

    ret = []
    # append the four searches
    for res in search_res['organic_results']:
        if res['link'] != origin:
            ret.append((res['title'], res['link']))
        if len(ret) == RET_SITES_COUNT:
            break

    return ret


if __name__ == '__main__':
    url = 'https://aws.amazon.com/certification/certified-developer-associate/'
    kws = parse_site_keywords(url)
    for r in generate_related_sites(url, kws):
        print(r)
