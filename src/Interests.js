import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";

const Interests = () => {
  let [interestsCategories, setInterestsCategories] = useState([]);

  useEffect(() => {
    const categories = [];
    for (let i = 0; i < 100; i++) {
      const randomName = faker.commerce.department();
      categories.push({
        id: randomName + (i + 1),
        interestName: randomName,
        selected: false,
      });
    }
    setInterestsCategories(categories);
  }, []);

  const handleChange = (id) => {
    let newInterestsCategories = interestsCategories.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item,
    );
    setInterestsCategories(newInterestsCategories);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = interestsCategories.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const totalPageNumbers = Math.ceil(interestsCategories.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPageNumbers; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    return pageNumbers.map((pageNumber) => (
      <span
        key={pageNumber}
        onClick={() => setCurrentPage(pageNumber)}
        className={currentPage === pageNumber ? "pages active" : "pages"}
      >
        {pageNumber}
      </span>
    ));
  };

  return (
    <div className="interests">
      <h2>Please mark your interests!</h2>
      <p>We will keep you notified.</p>
      <h3>My saved interests!</h3>
      <ul>
        {currentItems.map(({ id, interestName, selected }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={selected}
              onChange={() => handleChange(id)}
            />
            <span>{interestName}</span>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <span
          onClick={() => setCurrentPage(1)}
          className={currentPage === 1 ? "grey" : "black"}
        >
          &lt;&lt;
        </span>
        <span
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className={currentPage === 1 ? "grey" : "black"}
        >
          &lt;
        </span>
        {renderPageNumbers()}
        <span
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPageNumbers))
          }
          className={currentPage === totalPageNumbers ? "grey" : "black"}
        >
          &gt;
        </span>
        <span
          onClick={() => setCurrentPage(totalPageNumbers)}
          className={currentPage === totalPageNumbers ? "grey" : "black"}
        >
          &gt;&gt;
        </span>
      </div>
    </div>
  );
};

export default Interests;
