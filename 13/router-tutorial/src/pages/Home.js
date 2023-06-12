import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <ul>
        <li>
          {/*
            a 태그를 활용하면 페이지를 새로 불러오기 때문에 리액트 라우터에서는 Link 컴포넌트를 활용함.
            link 컴포넌트 역시 a 태그를 활용하기는 하지만, 페이지를 새로 불러오는 것을 막고
            history api 를 통해 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있음.

            [추가]
            하지만 Link 컴포넌트는 리랜더링 이슈가 있다.
            Link 컴포넌트는 내부적으로 RouterContext의 Consumer 이다.
            RouterContext는 내부적으로 history change가 일어나면 state를 업데이트하여 모든 Consumer에 리렌더링을 일으켜
            history change가 일어날 때마다 항상 리렌더링이 일어나게 된다.
            https://blog.hoseung.me/2021-12-07-do-not-use-link/

          */}
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
