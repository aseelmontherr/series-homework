export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
    return show.seasons[seasonIndex].episodes[episodeIndex].title;
};

export const getLastSeasonNumber = (show) => {
    if(show.seasons.length === 0)
    {
        return 0;
    }
    return show.seasons[show.seasons.length - 1].number;
};

export const getNextSeasonYear = (show) => {
    if (show.nextSeason)
    {
        return show.nextSeason.year;
    }
    return "No announcement";
};