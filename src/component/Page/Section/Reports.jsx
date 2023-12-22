// Reports.js
import React from 'react';

const Reports = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Reports</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sample Report Card */}
        <div className="bg-white p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Sales Report</h2>
          <p className="text-gray-600">Total Sales: $100,000</p>
          <h1>"In today's dynamic business landscape, effective sales strategies are crucial for driving growth and ensuring long-term success. Sales teams play a pivotal role in building relationships with clients, understanding their needs, and delivering tailored solutions. By leveraging innovative technologies and adopting customer-centric approaches, businesses can enhance the sales experience and create lasting value</h1>
        </div>

        {/* Another Report Card */}
        <div className="bg-white p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">User Engagement</h2>
          <p className="text-gray-600">Active Users: 5000</p>
          In the current quarter, our platform has experienced a significant surge in user engagement, reflecting the effectiveness of recent enhancements and outreach strategies. The number of active users has surpassed the 5000 mark, showcasing a robust community of individuals interacting with our services regularly. 
        </div>

        {/* Yet Another Report Card */}
        <div className="bg-white p-4 border rounded-md shadow-md">
          <h2 className="text-lg font-semibold mb-2">Project Status</h2>
          <p className="text-gray-600">Completed Projects: 20</p>
          Our team is actively working on several projects to deliver high-quality products to our clients.
          As of now, we have successfully completed 20 projects, each meeting or exceeding client expectations.
          Our dedicated team members are collaborating efficiently to ensure timely delivery and adherence to project timelines.
          Additionally, we are closely monitoring ongoing projects,
        </div>
      </div>
    </div>
  );
};

export default Reports;
