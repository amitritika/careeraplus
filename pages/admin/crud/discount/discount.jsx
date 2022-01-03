import Layout from '../../../../components/Layout';
import Admin from '../../../../components/auth/Admin';
import DiscountCreate from '../../../../components/crud/DiscountCreate';
import Link from 'next/link';

const Discount = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 pt-5 pb-5">
                            <h2>Create a new Discount</h2>
                        </div>
                        <div className="col-md-12">
                            <DiscountCreate />
                        </div>
                    </div>
                </div>
            </Admin>
        </Layout>
    );
};

export default Discount;