import React from 'react'
import { Link } from 'gatsby'
import { ReactiveBase, DataSearch, MultiDataList, ResultList, SingleRange, DynamicRangeSlider } from '@appbaseio/reactivesearch';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <ReactiveBase
				app="plantTrees"
				credentials="ZTNsIxjZd:de141fa7-5716-4053-b9fd-66354eb5ec73"
                theme={{
    typography: {
      fontFamily: 'Raleway, Helvetica, sans-serif',
      fontSize: '14px',
    },
    colors: {
      primaryColor: '#008000',
      titleColor: 'black',
    }
  }}>
    
            
				<DataSearch
						componentId="searchbox"
						dataField="tree_name"
						categoryField="tree_category.raw" // use "brand.keyword" for newly cloned datasets
						placeholder="Search for trees"
					/>
    <p><br/></p>
					
					<ResultList
						componentId="result"
						title="Results"
						dataField="tree_name"
						from={0}
						size={6}
            
                        showResultStats={false}
						pagination={true}
						react={{
							and: ["searchbox", "growthfilter", "sunfilter", "soilfilter", "maintainfilter", "heightRange", "priceRange"]
						}}
						onData={(res) => {
							return {
								image: res.image,
								title: res.tree_name,
								description: (<div>
                                <div>{res.tree_category}</div>
                                <div>{res.description}</div>
                                <div align = 'right'>${res.price}</div></div>
                                ),
                                
							}
						}}
					style={{
								width: "80%",
							}}
						/>
				</ReactiveBase>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
