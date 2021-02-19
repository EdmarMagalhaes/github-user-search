import React, { useState } from 'react';
import ButtonGen from 'core/components/Button';
import { SearchResult } from 'core/types/SearchResult';
import './styles.scss';
import ImageLoader from './components/ImageLoader';
import InfoLoader from './components/InfoLoaders';
import dayjs from 'dayjs'

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<SearchResult>();
    const [isLoading, setIsLoading] = useState(false);
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        fetch(`https://api.github.com/users/${search}`)
        .then(response => response.json())     
        .then(userResponse => setUserData(userResponse))                                 
        .finally(() => {
                setIsLoading(false)
         })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const createdAt = dayjs(userData?.created_at).format("DD/MM/YYYY");

    return (
        <div className="container-page">
            <div className="container-search">
                <h2 className="text-search">Encontre um perfil Github</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group form-position">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control search-input"
                                required
                                value={search}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <span className="button-search">
                        <ButtonGen text="Encontrar" />
                    </span>
                </form>
            </div>
           
            {userData && (
                <div className="container-result">

                    {isLoading ?

                        <div>
                            <span className="imageloader-position">
                               <ImageLoader />
                            </span>
                            <span className="infoloader-position">
                                <InfoLoader />
                            </span>
                        </div> : (
                                                 
                            <div>
                                <div>
                                    <img
                                        src={userData.avatar_url}
                                        className="resposive rouded-circle image-position"
                                        alt=""
                                        height="284px"
                                        width="284px"
                                    />
                                </div>

                                <div>
                                    <a href={userData.html_url} className="button-position" target="_new">
                                        <ButtonGen text="Ver Perfil" />
                                    </a>
                                </div>

                                <div>
                                    <span className="span1-position">
                                        <h6 className="text-span1">Repositórios públicos: {userData.public_repos}</h6>
                                    </span>
                                </div>
                                <div>
                                    <span className="span2-position">
                                        <h6 className="text-span2">Seguidores: {userData.followers}</h6>
                                    </span>
                                </div>
                                <div>
                                    <span className="span3-position">
                                        <h6 className="text-span3">Seguindo: {userData.following}</h6>
                                    </span>
                                </div>


                                <div className="container-info">
                                    <h5 className="text-box-info">Informações</h5>
                                    <span className="span4-position">
                                        <h6 className="text-span4"><strong>Empresa:</strong> &nbsp; {userData.company}</h6>
                                    </span>
                                    <span className="span5-position">
                                        <h6 className="text-span5"><strong>Website/Blog:</strong> &nbsp; {userData.blog}</h6>
                                    </span>
                                    <span className="span6-position">
                                        <h6 className="text-span6"><strong>Localidade:</strong> &nbsp; {userData.location}</h6>
                                    </span>
                                    <span className="span7-position">
                                        <h6 className="text-span7"><strong>Membro desde:</strong> &nbsp;  {createdAt}</h6>
                                    </span>

                                </div>

                            </div>
                        )}
                </div>
                
            )}

        </div>

    );
}

export default Search;