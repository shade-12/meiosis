import requests
from typing import Set


def parse_site_keywords(url: str) -> Set[str]:
    """ Parse website represented by input url and return a list of keywords from the site.

    :param url: string that denotes the input site
    :return: list of site keywords
    """
    keywords = set()
    site_content = requests.get(url).text

    # find title text, add them to keywords set
    si = site_content.find("<title>")
    se = site_content.find("</title>")

    if si != -1 and se != -1:
        # title exists
        site_title = site_content[si+7: se]
        # add keywords (filtering out symbols)
        for kw in site_title.split():
            if len(kw) > 1:
                keywords.add(kw)

    # TODO: maybe also add keywords from <meta name="description">?

    # return list of keywords
    return keywords


if __name__ == '__main__':
    print(parse_site_keywords('https://humanities.utoronto.ca/funding/39475'))
