import requests
from typing import List, Dict
from datetime import date


def generate_site_objects(raw_sites: List[Dict]):
    """ Generate site objects from input raw sites

    :param raw_sites: a list of dicts (title, link, snippet, is_opposite)s that denotes the input sites
    :return: a list of objects where each elem denotes a processed site with attributes:
        - title
        - link
        - citation
        - snippet
        - description
        - is_opposite
    """
    for raw_site in raw_sites:
        site_content = requests.get(raw_site['link']).text

        # try to get site name
        if 'meta name="description"' in site_content:
            si = site_content.find('<meta name="description" content="') + 34
            se = site_content.find('"', si)
            raw_site['description'] = site_content[si: se]

        # add APA6 citation
        cit_str = raw_site['title'] \
            + '. Retrieved ' + date.today().strftime("%B %d, %Y") \
            + ', from ' + raw_site['link']
        raw_site['citation_apa6'] = cit_str
