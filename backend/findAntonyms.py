from nltk.corpus import wordnet

def get_antonymsAndSynonyms(word):
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

def get_antonymsList(keyWords):
    """ Returns a list of relative antonyms based on the input

    :param word: keyWords- a list words
    :Returns a list of relative antonyms
    """

    synonyms = [] 
    antonyms = []

    for keyWord in keyWords:
        antonymSet, synonymSet = get_antonymsAndSynonyms(keyWord)
        if antonymSet:
            antonyms.append(antonymSet[0])
        if synonymSet:
            synonyms.append(antonymSet[0])
        
    return antonyms
