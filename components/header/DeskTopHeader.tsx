import styled from '@emotion/styled';
import { unit } from '@styles/variables.style';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

//? Image
import IMG_MoaToonLogo from '../../public/img/logo/moaToonLogo.png';
import IMG_SearchIcon from '../../public/img/searchIcon.svg';

const MENUS = [
    { name: '웹툰', href: '' },
    { name: '웹소설', href: '' },
    { name: '태그검색', href: '' }
];

const DeskTopHeader = () => {
    //? next
    const router = useRouter();

    return (
        <Wrap>
            <Image src={IMG_MoaToonLogo} width={94} height={24} alt="로고이미지" onClick={() => router.push('/')} />
            <MenuWithSearchWrap>
                <MenuWrap>
                    {MENUS.map((menu) => (
                        <Menu key={menu.name} href={menu.href}>
                            {menu.name}
                        </Menu>
                    ))}
                </MenuWrap>
                {/* //! 아래 컴포넌트로 분할 예정 */}
                {/* <SearchArea /> */}
                <Image src={IMG_SearchIcon} width={20} height={20} alt="검색아이콘" />
            </MenuWithSearchWrap>
            <UserActionWrap>
                <Menu href="/auth">로그인/가입</Menu>
                {/* //! 아래 컴포넌트 추가 예정 */}
                {/* <UserDropDown /> */}
            </UserActionWrap>
        </Wrap>
    );
};

export default DeskTopHeader;

const Wrap = styled.div`
    width: 100%;
    padding: 0 ${unit(50)};
    height: ${unit(64)};
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: transparent;
    box-shadow: transparent 0px 1px 0px 0px;
    z-index: 999;

    img {
        cursor: pointer;
    }
`;

const MenuWithSearchWrap = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 ${unit(32)};
    width: 100%;
`;

const MenuWrap = styled.div`
    display: flex;
    column-gap: ${unit(24)};
`;

const Menu = styled(Link)`
    font-weight: 600;
    font-size: ${unit(16)};
    color: #ffffffe8;
`;

const UserActionWrap = styled.div`
    min-width: ${unit(90)};
    text-align: center;
`;
