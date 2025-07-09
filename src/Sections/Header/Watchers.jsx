import React from 'react';
import LogoImg1 from "../../assets/images/logo/logo.svg";
import {
  Wrapper,
  TopNav,
  UtilityBar,
  MainMenu,
  MenuItem,
  SubMenu,
  SectionTitle
} from './Watchers.style';

const menuData = [
  {
    title: 'EXPLORE',
    items: [
      'HOME',
      'BELIEF SYSTEM',
      'FOUNDER’S PORTAL',
      'LEADERSHIP',
      'MINISTERS',
      'CAMPUSES',
      'SCHOOLS',
      'SUNDAY SERVICE',
      'CAREERS',
      'CONTACT US'
    ]
  },
  {
    title: 'READ',
    items: [
      'TOPICS',
      'TEACHINGS',
      'BIBLE STUDY',
      'DEVOTIONALS',
      'STUDY GUIDES',
      'NEWSLETTERS',
      'PUBLICATIONS',
      'WATCHERS MAGAZINE',
      'QUESTION PORTAL'
    ]
  },
  {
    title: 'WATCH',
    items: [
      'LIVESTREAM',
      'VIDEO ON DEMAND',
      'DAILY BROADCASTS',
      'SERMONS',
      'SHOWS',
      'SERIES',
      'PODCASTS',
      'MOVIES',
      'SCHEDULE'
    ]
  },
  {
    title: 'FAITH',
    items: [
      'FIRST TIMERS',
      'SALVATION',
      'MEMBERSHIP',
      'UNITS',
      'BAPTISM',
      'COUNSELING',
      'DISCIPLESHIP',
      'TITHING',
      'OFFERINGS',
      'PRAYER REQUESTS',
      'PROPHECIES',
      'TESTIMONY PORTAL'
    ]
  },
  {
    title: 'MINISTRIES',
    items: [
      'CHILDREN',
      'YOUNG ADULTS',
      'MEN',
      'WOMEN',
      'SINGLES',
      'MARRIED',
      'WIDOWS',
      'ELDERLY'
    ]
  },
  {
    title: 'PROGRAMS',
    items: [
      'GOSPEL',
      'DYNAMICS OF FAITH',
      'MANIFOLD',
      'FAITHOPTICS',
      'WORDFEST',
      'HEALING TO THE NATIONS',
      'DISCIPLESHIP'
    ]
  },
  {
    title: 'MEDIA',
    items: [
      'WATCHERS NETWORK',
      'WATCHERS MOBILE',
      'WATCHERS PLUS',
      'WATCHERS TV',
      'WATCHERS CLOUD',
      'SCHEDULE',
      'NEWS',
      'BLOGS',
      'ARTICLES',
      'MAGAZINES'
    ]
  },
  {
    title: 'CALLING',
    items: [
      'APOSTOLIC',
      'PROPHETIC',
      'EVANGELISTIC',
      'PASTORIC',
      'TEACHING',
      'HELPS',
      'MARKETPLACE',
      'PROFESSIONAL'
    ]
  },
  {
    title: 'EVENTS',
    items: [
      'WATCH ALTARS CONFERENCE',
      'WATCHERS BUSINESS SUMMIT',
      'WATCHERS PRAYER CONFERENCE',
      'WATCHERS WORD FEAST',
      'WATCHERS CAMP OUT',
      'WATCHERS MORNING PRAYERS'
    ]
  },
  {
    title: 'RESOURCES',
    items: [
      'DEVELOPERS',
      'APPSTORE',
      'BOOKSTORE',
      'DIGITAL LIBRARY',
      'FINANCE & BUSINESS CENTER',
      'EDUCATION & ACADEMIC CENTER',
      'WELFARE CENTER',
      'RESEARCH & LEARNING CENTER',
      'HEALTH CENTER',
      'COUNSELLING & WELLNESS CENTER',
      'SUPPORT'
    ]
  },
  {
    title: 'PARTNERS',
    items: [
      'PARTNERS NETWORK',
      'SOW/GIVE'
    ]
  },
  {
    title: 'APPSTORE',
    items: [
      'APP_1',
      'APP_2',
      'APP_3',
      'APP_4',
      'APP_5'
    ]
  }
];

const WatchersHeader = () => (
  <Wrapper>
    <TopNav>
      <span>WATCHERS GLOBAL</span>
      <span>WATCHERS INTERNATIONAL</span>
      <span>WATCHERS FOUNDATION</span>
      <span>WATCHERS ACADEMY</span>
      <span>WATCHERS INSTITUTE</span>
      <span>WATCHERS BANK</span>
    </TopNav>

    <UtilityBar>
      <span>SELECT A REGION</span>
      <span>LANGUAGE</span>
      <span>NEW TO THE FAITH?</span>
      <span>RECEIVE JESUS</span>
      <span>SUPPORT</span>
      <span>SOCIAL MEDIA</span>
      <span>A.I. WORKSPACE</span>
      <span>STORE</span>
    </UtilityBar>

    
  </Wrapper>
);

export default WatchersHeader;
