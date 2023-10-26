import { useEffect, useState } from "react";

const lastCommentsUrl: string = "https://clamorextension.com/getlatestcomments";

interface Comment {
  id: string;
  comment: string;
  timestamp: {
    _seconds: number;
    _nanoseconds: number;
  };
  votes: number;
  url: string;
}

function timeAgo(timestamp: number) {
  const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds
  const secondsAgo = currentTimestamp - timestamp;

  if (!timestamp) {
    return "";
  }

  if (secondsAgo < 60) {
    return `${secondsAgo} second${secondsAgo !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 3600) {
    const minutesAgo = Math.floor(secondsAgo / 60);
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 86400) {
    const hoursAgo = Math.floor(secondsAgo / 3600);
    return `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (secondsAgo < 604800) {
    const daysAgo = Math.floor(secondsAgo / 86400);
    return `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  } else {
    const weeksAgo = Math.floor(secondsAgo / 604800);
    return `${weeksAgo} week${weeksAgo !== 1 ? "s" : ""} ago`;
  }
}

export const LatestComments = () => {
  const [latestComments, setLatestComments] = useState<Comment[]>([]);

  useEffect(() => {
    async function getComments() {
      const res = await fetch(lastCommentsUrl);
      const data = await res.json();
      const commentsData = data.comments;
      setLatestComments(commentsData);
    }
    getComments();
  }, []);

  return (
    <div className="w-5/6">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              Latest Comments
            </th>
            <th scope="col" className="px-6 py-3">
              URL
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
          </tr>
        </thead>
        {latestComments.map((comment: Comment) => (
          <tbody key={comment.id}>
            <tr className="bg-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {comment.comment}
              </th>
              <a href={comment.url}>{comment.url}</a>
              <td className="px-6 py-4">
                {timeAgo(comment.timestamp._seconds)}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
