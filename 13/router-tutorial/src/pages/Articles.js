import {NavLink, Outlet} from 'react-router-dom';

const Articles = () => {
    return (
        <div>
            {/*
            중첩된 라우터 사용시 활용.
              <Route path="/articles" element={<Articles />}>
                <Route path=":id" element={<Article />} />
              </Route>

            * route의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할을 한다.
            ** 페이지끼리 공통적으로 보여줘야하는 레이아웃이 있을 때도 사용한다.
                ex) header 컴포넌트 재사용대신 outlet 활용

        */}
            <Outlet/>
            <ul>
                <ArticleItem id={1}/>
                <ArticleItem id={2}/>
                <ArticleItem id={3}/>
            </ul>
        </div>
    );
};

const ArticleItem = ({id}) => {
    const activeStyle = {
        color: 'green',
        fontSize: 21,
    };
    return (
        <li>
            {/*
        NavLink
            링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우
            특정 스타일 또는 css 클래스를 적용하는 컴포넌트.

            isActive 을 파라미터로 전달받는 함수 타임의 값을 반환한다!
        */}
            <NavLink
                to={`/articles/${id}`}
                style={({isActive}) => (isActive ? activeStyle : undefined)}
            >
                게시글 {id}
            </NavLink>
        </li>
    );
};

export default Articles;
