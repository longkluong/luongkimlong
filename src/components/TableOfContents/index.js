import React, { useEffect, useState } from "react";
import { Toc, TocContents } from "./TableOfContents.style";

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get the raw CSS-id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}

function useActiveId(itemIds) {
  const [activeId, setActiveId] = useState(`test`);
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveId(entry.target.id);
  //         }
  //       });
  //     },
  //     { rootMargin: `0% 0% -80% 0%` }
  //   );
  //   itemIds.forEach((id) => {
  //     observer.observe(document.getElementById(id));
  //   });
  //   return () => {
  //     itemIds.forEach((id) => {
  //       observer.unobserve(document.getElementById(id));
  //     });
  //   };
  // }, [itemIds]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );
    itemIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });
    return () => {
      itemIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);
  return activeId;
}

function renderItems(items, activeId) {
  return (
    <ol>
      {items.map((item) => {
        return (
          <li key={item.url}>
            <a
              href={item.url}
              style={{
                color: activeId === item.url.slice(1) ? `var(--colorLinkHover)` : "black",
              }}
            >
              {item.title}
            </a>
            {item.items && renderItems(item.items, activeId)}
          </li>
        );
      })}
    </ol>
  );
}

const TableOfContents = (props) => {
  const idList = getIds(props.items);
  const activeId = useActiveId(idList);
  return (
  <>
    <Toc>
      <TocContents open>
        <summary>Table of Contents</summary>
        {renderItems(props.items, activeId)}
      </TocContents>
    </Toc>
  </>
  );
}

export default TableOfContents;