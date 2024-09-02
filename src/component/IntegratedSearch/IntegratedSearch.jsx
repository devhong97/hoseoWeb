import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
const IntegratedSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state || {};
  const [locationKey, setLocationKey] = useState("");
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("searchText");
  const inputRef = useRef(null);

  const [searchText, setSearchText] = useState(paramValue || "");
  const [noticeList, setNoticeList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [employmentList, setEmploymentList] = useState([]);
  const [bidList, setBidList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const [referenceList, setReferenceList] = useState([]);
  const [archiveList, setArchiveList] = useState([]);
  const [inquiryList, setInquiryList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (locationKey === "") {
      setLocationKey(location.key);
    }

    if (locationKey !== "" && locationKey !== location.key) {
      window.location.reload();
    }
  }, [location.key]);

  useEffect(() => {
    getSearchList();
  }, []);

  const getSearchList = () => {
    axios
      .get(
        `https://ciuc.or.kr:8443/api/get/intergratedSearch?searchText=${searchText}`
      )
      .then((res) => {
        const {
          notice,
          business,
          education,
          employment,
          bid,
          news,
          reference,
          archive,
          inquiry,
        } = res.data.data;
        setNoticeList(notice);
        setBusinessList(business);
        setEducationList(education);
        setEmploymentList(employment);
        setBidList(bid);
        setNewsList(news);
        setReferenceList(reference);
        setArchiveList(archive);
        setInquiryList(inquiry);
        // console.log("notice>>>", notice);
        // console.log("business>>>", business);
        // console.log("education>>>", education);
        // console.log("employment>>>", employment);
        // console.log("news>>>", news);
        // console.log("reference>>>", reference);
        // console.log("archive>>>", archive);
        // console.log("inquiry>>>", inquiry);
        const totalCount =
          notice.length +
          business.length +
          education.length +
          employment.length +
          bid.length +
          news.length +
          reference.length +
          archive.length +
          inquiry.length;
        setTotalCount(totalCount);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const moveBoard = (cate, idx) => {
    navigate(`/board/${cate}/${idx}`, { state: { cate: cate } });
  };

  const search_btn = () => {
    navigate(`/integratedSearch?searchText=${searchText}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 동작 방지
      search_btn();
    }
  };
  return (
    <div>
      <div className="search_wrap">
        <div className="search_back">
          <div className="search_container">
            <div className="title_box">
              <div className="title_text">통합검색</div>
              <div className="total_count">{totalCount}건의 게시글</div>
            </div>

            <div className="list_area">
              <div className="search_box">
                <input
                  className="search_input"
                  placeholder="검색어를 입력하세요"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  ref={inputRef}
                  onKeyDown={handleKeyDown}
                ></input>
                <div className="option-box">
                  <div
                    className="search_btn"
                    onClick={() => {
                      search_btn();
                    }}
                  ></div>
                </div>
              </div>
              {!loading && (
                <div>
                  <div className="list_box">
                    <div className="board_title">공지사항</div>
                    <div className="board_count">
                      {noticeList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {noticeList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        noticeList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("notice", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="list_box">
                    <div className="board_title">사업공고</div>
                    <div className="board_count">
                      {businessList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {businessList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        businessList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("business", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="list_box">
                    <div className="board_title">교육공고</div>
                    <div className="board_count">
                      {educationList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {educationList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        educationList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("education", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="list_box">
                    <div className="board_title">채용공고</div>
                    <div className="board_count">
                      {employmentList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {employmentList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        employmentList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("employment", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="list_box">
                    <div className="board_title">입찰공고</div>
                    <div className="board_count">
                      {bidList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {bidList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        bidList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("bid", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="list_box">
                    <div className="board_title">보도자료</div>
                    <div className="board_count">
                      {newsList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {newsList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        newsList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("news", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="list_box">
                    <div className="board_title">자료실</div>
                    <div className="board_count">
                      {referenceList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {referenceList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        referenceList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("reference", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="list_box">
                    <div className="board_title">융합원 아카이브</div>
                    <div className="board_count">
                      {archiveList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {archiveList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        archiveList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("archive", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                  <div className="list_box">
                    <div className="board_title">입주문의</div>
                    <div className="board_count">
                      {inquiryList.length}건의 게시글
                    </div>
                    <div className="board_body">
                      {inquiryList.length === 0 ? (
                        <div className="body_row">
                          <div className="row_wrap">
                            <div className="no_data">검색결과가 없습니다.</div>
                          </div>
                        </div>
                      ) : (
                        inquiryList.map((item, index) => {
                          return (
                            <div
                              className="body_row"
                              key={item.idx}
                              onClick={() => moveBoard("inquiry", item.idx)}
                            >
                              <div className="row_wrap">
                                <div className="row_title">{item.title}</div>
                                <div className="row_date">
                                  {item.date_format}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <div>notice</div>
        {noticeList.map((data) => (
          <div onClick={(e) => moveBoard("notice", data.idx)}>{data.title}</div>
        ))}
      </div>
      <div>
        <div>business</div>
        {businessList.map((data) => (
          <div onClick={(e) => moveBoard("business", data.idx)}>
            {data.title}
          </div>
        ))}
      </div>
      <div>
        <div>education</div>
        {educationList.map((data) => (
          <div onClick={(e) => moveBoard("education", data.idx)}>
            {data.title}
          </div>
        ))}
      </div>
      <div>
        <div>employment</div>
        {employmentList.map((data) => (
          <div onClick={(e) => moveBoard("employment", data.idx)}>
            {data.title}
          </div>
        ))}
      </div>
      <div>
        <div>bid</div>
        {bidList.map((data) => (
          <div onClick={(e) => moveBoard("bid", data.idx)}>{data.title}</div>
        ))}
      </div>
      <div>
        <div>news</div>
        {newsList.map((data) => (
          <div onClick={(e) => moveBoard("news", data.idx)}>{data.title}</div>
        ))}
      </div>
      <div>
        <div>reference</div>
        {referenceList.map((data) => (
          <div onClick={(e) => moveBoard("reference", data.idx)}>
            {data.title}
          </div>
        ))}
      </div>
      <div>
        <div>archive</div>
        {archiveList.map((data) => (
          <div onClick={(e) => moveBoard("archive", data.idx)}>
            {data.title}
          </div>
        ))}
      </div>
      <div>
        <div>inquiry</div>
        {inquiryList.map((data) => (
          <div onClick={(e) => moveBoard("inquiry", data.idx)}>
            {data.title}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default IntegratedSearch;
