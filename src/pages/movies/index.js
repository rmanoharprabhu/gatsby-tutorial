import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/movies.module.css'

export default function Index() {
    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Welcome to Movies Page</h2>
            </div>
        </Layout>
    )
}
