import requests
from typing import Set

CONJUNCTIONS_AND_DETERMINERS = {'the', 'a', 'an', 'this', 'that', 'these', 'those', 'my', 'your', 'his', 'her', 'its', 'our', 'their', \
                                'a few', 'a little', 'much', 'many', 'a lot of', 'most', 'some', 'any', 'enough', \
                                'all', 'both', 'half', 'either', 'neither', 'each', 'every', 'other', 'another', 'such', 'what', 'rather', 'quite', \
                                'for', 'and', 'nor', 'but', 'or', 'yet', 'so'}


def parse_site_keywords(url: str) -> Tuple[Set[str], str]:
    """ Parse website represented by input url and return a list of keywords from the site.

    :param url: string that denotes the input site
    :return: list of site keywords
    """
    keywords = set()
    cite = ''
    site_content = requests.get(url).text

    # find title text, add them to keywords set
    si = site_content.find("<title>")
    se = site_content.find("</title>")

    if si != -1 and se != -1:
        # title exists
        site_title = site_content[si+7: se]
        cite = site_title \
            + '. Retrieved ' + date.today().strftime("%B %d, %Y") \
            + ', from ' + url
        # add keywords (filtering out symbols and meaningless words)
        for kw in site_title.split():
            if len(kw) > 1 and kw.lower() not in CONJUNCTIONS_AND_DETERMINERS:
                keywords.add(kw)

    # TODO: maybe also add keywords from <meta name="description">?

    # return list of keywords
    return keywords, cite


if __name__ == '__main__':
    print(parse_site_keywords('https://humanities.utoronto.ca/funding/39475'))
