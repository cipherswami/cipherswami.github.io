import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import { Layout } from '@components';
import { FormattedIcon } from '@components/icons';
import styled from 'styled-components';
import { theme, media, Main } from '@styles';
import { graphql } from 'gatsby';

const { colors, fonts, fontSizes } = theme;

const StyledMainContainer = styled(Main)``;

const StyledHeader = styled.header`
  text-align: center;
  margin-bottom: 40px;

  .big-title {
    font-size: ${fontSizes.h1};
    color: ${colors.green};
  }

  .subtitle {
    font-size: ${fontSizes.lg};
    color: ${colors.slate};
  }
`;

const StyledTableContainer = styled.div`
  margin: 100px -20px;
  ${media.tablet`
    margin: 100px -10px;
  `};
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;

  tbody tr {
    transition: ${theme.transition};
    &:hover,
    &:focus {
      background-color: ${colors.lightNavy};
    }
  }

  th,
  td {
    padding: 15px 20px;
    ${media.tablet`
      padding: 10px;
    `};
    font-size: ${fontSizes.md};
    font-family: ${fonts.SFMono};
  }

  th {
    color: ${colors.green};
    font-size: ${fontSizes.lg};
  }

  td .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 6px;
    svg {
      width: 22px;
      height: 22px;
      color: ${colors.lightestSlate};
      transition: color 0.2s;

      &:hover {
        color: ${colors.green};
      }
    }
  }
`;

const MyResumesPage = ({ data, location }) => {
  const resumes = data.allResume.nodes;

  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealRows = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig());
    revealRows.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet>
        <title>My Resumes</title>
      </Helmet>

      <StyledMainContainer>
        <StyledHeader ref={revealTitle}>
          <h1 className="big-title">My Resumes</h1>
          <p className="subtitle">Versions tailored to different roles</p>
        </StyledHeader>

        <StyledTableContainer ref={revealTable}>
          <StyledTable>
            <thead>
              <tr>
                <th>Resume</th>
                <th>View</th>
                <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {resumes.map((resume, i) => (
                <tr key={i} ref={el => (revealRows.current[i] = el)}>
                  <td>{resume.title}</td>
                  <td>
                    <a
                      className="icon-button"
                      href={resume.filePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${resume.title}`}>
                      <FormattedIcon name="External" />
                    </a>
                  </td>
                  <td>
                    <a
                      className="icon-button"
                      href={resume.filePath}
                      download
                      aria-label={`Download ${resume.title}`}>
                      <FormattedIcon name="Download" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledTableContainer>
      </StyledMainContainer>
    </Layout>
  );
};

MyResumesPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default MyResumesPage;

export const query = graphql`
  {
    allResume {
      nodes {
        title
        filePath
      }
    }
  }
`;
