import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Repos.module.css';
import Repo from './Repo';
import ReposNotFound from '../../ReposNotFound/ReposNotFound';

function Repos({ profileData, reposData }) {
  if (profileData.public_repos === 0) {
    return <ReposNotFound />;
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Repositories ({profileData.public_repos})</h2>
      <div className={styles.repos}>
        {reposData.map((repo) => (
          <Repo repo={repo} key={repo.id} />
        ))}
        ,
      </div>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        pageCount={20}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName="pagination justify-content-center"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        activeClassName="active"
      />
    </div>
  );
}

export default Repos;
