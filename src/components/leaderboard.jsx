import React from "react";
import { useLoaderData } from "react-router-dom";
// import PropTypes from "prop-types";

function Leaderboard({}) {
  const data = useLoaderData();
  return (
    <div className="table">
      <table id="customers">
        <thead>
          <tr>
            <th>Player name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {data.users.map((e) => {
            return (
              <>
                <tr>
                  <td>{e.name}</td>
                  <td>{(e.score / 1000).toFixed(2) + "s"}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

Leaderboard.propTypes = {};

export default Leaderboard;
