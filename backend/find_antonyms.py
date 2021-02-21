from nltk.corpus import wordnet
from typing import Set


def get_antonyms_and_synonyms(word):
    """ Returns two list of relative antonyms, synonyms from the input keywords.

    :param word: single word
    :return: Returns two list of relative antonyms, synonyms from the input keywords.
    """
    word = str(word)
    synonyms = []
    antonyms = []
    for syn_set in wordnet.synsets(word):
        for l in syn_set.lemmas():
            synonyms.append(l.name())
            if l.antonyms():
                antonyms.append(l.antonyms()[0].name())

    return antonyms, synonyms


def get_antonyms_list(key_words: Set[str]) -> Set[str]:
    """ Returns a list of relative antonyms based on the input

    :param key_words: keyWords- a list words
    :Returns a list of relative antonyms
    """
    synonyms = []
    antonyms = []

    for key_word in key_words:
        antonym_set, synonym_set = get_antonyms_and_synonyms(key_word)
        if antonym_set:
            antonyms.append(antonym_set[0])
        if synonym_set:
            synonyms.append(synonym_set[0])

    return set(antonyms)
