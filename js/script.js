
// JavaScript for object containing the solutions

const solutions = {
    solution1: {
      title: "Financial Support And Rewards By The Government!",
      image: "/img/solution1.png",
      text: "Governments can play a significant role in promoting the adoption of green energy technologies by providing subsidies and incentives. These could include tax credits, grants, and low-interest loans for installing solar panels, wind turbines, or other renewable energy systems. By reducing the upfront costs for consumers, more people will be incentivized to invest in green energy solutions, making them more accessible to those with average budgets.",
    },
    solution2: {
      title: "Community-Based Renewable Energy Projects!",
      image: "/img/solution2.png",
      text: "Community-based renewable energy projects can be a cost-effective way to make green energy accessible to a larger number of people. Local communities can pool resources to invest in renewable energy infrastructure like solar farms or wind projects. By sharing the costs and benefits, participants can access clean energy at affordable rates. Additionally, community ownership fosters a sense of responsibility and cooperation, promoting a sustainable energy future.",
    },
    solution3: {
      title: "Regulatory Support!",
      image: "/img/solution3.png",
      text: "Enact and enforce policies that promote the adoption of green energy, such as renewable portfolio standards and emissions reduction targets. Strong and consistent regulatory support can create a stable market for green energy, encouraging more affordable and innovative solutions.",
    },
  };
  function updateContent(solution) {
    document.getElementById("solution-heading").textContent = solutions[solution].title;
    document.getElementById("info").textContent = solutions[solution].text;
  }
  
  document.getElementById("green-solution1").addEventListener("click", function () {
    updateContent("solution1");
    document.getElementById("green-solution1").classList.add("active-button");
    document.getElementById("green-solution2").classList.remove("active-button");
    document.getElementById("green-solution3").classList.remove("active-button");
  });
  
  document.getElementById("green-solution2").addEventListener("click", function () {
    updateContent("solution2");
    document.getElementById("green-solution1").classList.remove("active-button");
    document.getElementById("green-solution2").classList.add("active-button");
    document.getElementById("green-solution3").classList.remove("active-button");
  });
  
  document.getElementById("green-solution3").addEventListener("click", function () {
    updateContent("solution3");
    document.getElementById("green-solution1").classList.remove("active-button");
    document.getElementById("green-solution2").classList.remove("active-button");
    document.getElementById("green-solution3").classList.add("active-button");
  });
  