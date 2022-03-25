import useCustomFetch from '../hooks/useCustomFetch';

export const apiKey = '27b8ce8a261392c5a3122cb299ba28fe';
export const backendUrl = 'https://api.themoviedb.org/3';

export const requestUrls = {
    fetchPopularMovies: `${backendUrl}/movie/popular?api_key=${apiKey}`,
};

export const useCustomFetchPopularMovies = () => {
    const {
        error: serverError,
        data: apiData,
        isLoading: isLoading,
    } = useCustomFetch(requestUrls.fetchPopularMovies);

    return { isLoading, serverError, apiData };
};