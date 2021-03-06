import styled from 'styled-components'
import logoPic from '../../statics/images/logo.png'

// 创建CSS组件
export const HeaderWrapper = styled.header`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
  title: '简书首页',
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.nav`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.a`
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  &.left {
    float: left
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a
  }
`
export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
  }

`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &::placeholder {
    color: #999;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font-size: 14px;
  &.reg {
    color:#ec6149;
  }
  &.writting {
    color: #fff;
    background: #ec6149;
  }
`