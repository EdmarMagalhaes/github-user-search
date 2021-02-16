import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGen from '../../core/components/Button';
import './styles.scss';
import GithubImage from './github-mark.png';
const search = () => (
    <div className="container-search">
        <div className="box-search">
            <h2 className="text-search">Encontre um perfil Github</h2>
            <form>
                <div className="form-group form-position">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control search-input"
                            required
                        />
                    </div>
                </div>
            </form>
            <Link to="/" className="button-search">
                <ButtonGen text="Encontrar" />
            </Link>
        </div>
        <div className="box-result">
            <div>
                <img
                    src={GithubImage}
                    className="resposive rouded-circle image-position"
                    alt=""
                    height="284px"
                    width="284px"
                />
                <a href="https://github.com/EdmarMagalhaes" className="button-position" target="_new">
                <ButtonGen text="Ver Perfil" />
                </a>
                <div>
                    <span  className="span1-position">
                    <h6 className="text-span1">Repositórios públicos: 00</h6>
                    </span>
                </div>
                <div>
                    <span  className="span2-position">
                    <h6 className="text-span2">Seguidores: 000</h6>
                    </span>
                </div>
                <div>
                    <span  className="span3-position">
                    <h6 className="text-span3">Seguindo: 000</h6>
                    </span>
                </div>
            </div>
            <div className="box-info">
                <h5 className="text-box-info">Informações</h5>
                <span  className="span4-position">
                    <h6 className="text-span4">Empresa: @ZupIT</h6>
                    </span>
                    <span  className="span5-position">
                    <h6 className="text-span5">Website/Blog: https://thewashington.dev</h6>
                    </span>
                    <span  className="span6-position">
                    <h6 className="text-span6">Localidade: Uberlândia</h6>
                    </span>
                    <span  className="span7-position">
                    <h6 className="text-span7">Membro desde: 19/10/2013</h6>
                    </span>
                              
            </div>
        </div>

    </div>


);

export default search;