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


export const getById = (series, id) => {
    return series.find(show => show.id === id);
};

export const getSeasonsCount = (series) => {
    return series.map(show => ({
        title: show.title,
        seasons: show.seasons.length
    }));
};


export const hasTopEpisode = (show, minRating) => {
    return show.seasons.some(season =>
        season.episodes.some(episode =>
            episode.rating >= minRating
        )
    );
};

export const getCreatorsFrom = (series, country) => {
    return series
        .filter(show => show.creator.country === country)
        .map(show => show.creator.name);
};


export const sortByStartYear = (series) => {
    return [...series].sort((a, b) => a.startYear - b.startYear);
};


export const renameSeries = (series, id, newTitle) => {
    return series.map(show => {
        if (show.id === id) {
            return { ...show, title: newTitle };
        }

        return show;
    });
};

export const addSeason = (series, showId, season) => {
    return series.map(show => {
        if (show.id === showId) {
            return {
                ...show,
                seasons: [...show.seasons, season]
            };
        }

        return show;
    });
};


export const addEpisode = (series, showId, seasonNumber, episode) => {
    return series.map(show => {
        if (show.id === showId) {
            return {
                ...show,
                seasons: show.seasons.map(season => {
                    if (season.number === seasonNumber) {
                        return {
                            ...season,
                            episodes: [...season.episodes, episode]
                        };
                    }

                    return season;
                })
            };
        }

        return show;
    });
};


