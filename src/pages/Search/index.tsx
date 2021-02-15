import React from 'react';
import { Link } from 'react-router-dom';
import ButtonGen from '../../core/components/Button';
import './styles.scss';

const search = () => (
    <div className="container-search">
        <div className="box-search">
            <h2 className="text-search">Encontre um perfil Github</h2>
            <form>
                <div className="form-group form-position">
                    <div className ="input-group">
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
            <div className="box-info">
                <h5 className="text-box-info">Informações</h5>
            </div>
        </div>

    </div>


);

export default search;