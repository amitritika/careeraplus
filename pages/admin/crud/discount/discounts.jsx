import Layout from '../../../../components/Layout';
import Admin from '../../../../components/auth/Admin';
import Discounts from '../../../../components/crud/Discounts';
import Link from 'next/link';

const Discount = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>All Discount</h2>
                        </div>
                        <div className="col-md-12">
                            <Discounts />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Discount;