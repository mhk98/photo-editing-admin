import React from "react";
import { useContext, useEffect, useState } from "react";
import { TranslatorContext } from "../../context/Translator";
import { Row, Col, Dropdown, Button } from "react-bootstrap";
import { PaginationComponent } from "../../components";
import PageLayout from "../../layouts/PageLayout";
import { Modal, Form } from "react-bootstrap";
import { ButtonComponent } from "../../components/elements";
import {
  useCreateHomeBannerMutation,
  useDeleteHomeBannerMutation,
  useGetAllHomeBannerQuery,
  useUpdateHomeBannerMutation,
} from "../../features/homeBanner/homeBanner";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const HomeBanner = () => {
  const thead = ["image1", "image2", "image3", "image4", "image5", "action"];

  const { t } = useContext(TranslatorContext);

  const [editModal, setEditModal] = React.useState(false);
  const [blockModal, setBlockModal] = React.useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");
  const [file5, setFile5] = useState("");
  const [bannerData, setBannerData] = useState([]);
  const [updateId, setUpdateId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  function handleChange1(e) {
    setFile1(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage1(e.target.files[0]);
    }
  }

  function handleChange2(e) {
    setFile2(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage2(e.target.files[0]);
    }
  }
  function handleChange3(e) {
    setFile3(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage3(e.target.files[0]);
    }
  }
  function handleChange4(e) {
    setFile4(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage4(e.target.files[0]);
    }
  }
  function handleChange5(e) {
    setFile5(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage5(e.target.files[0]);
    }
  }

  const [createHomeBanner] = useCreateHomeBannerMutation();

  const onFormSubmit = async () => {
    const formData = new FormData();

    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);
    formData.append("image5", image5);
    try {
      const res = await createHomeBanner(formData);
      if (res) {
        toast.success(res.info.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [updateHomeBanner] = useUpdateHomeBannerMutation();

  const onFormEdit = async () => {
    const formData = new FormData();

    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);
    formData.append("image5", image5);
    try {
      const res = await updateHomeBanner({ id: updateId, data: formData });
      if (res) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // const [homeBannerData, setHomeBannerData] = useState([]);


  // const { data, isLoading, isError, error } = useGetAllHomeBannerQuery();

  // useEffect(() => {
  //   if (isError) {
  //     console.error("Error fetching health data", error);
  //   } else if (!isLoading) {
  //     if (data) {
  //       setHomeBannerData(data.data);
  //     }
  //   }
  // }, [data, isLoading, isError, error]);

  const [data, setData] = useState([]);
 
  console.log("bgProjects", data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://photo-editing-backend.onrender.com/api/v1/homeBanner'); // Replace with your API endpoint
        setData(response.data.data);
      } catch (err) {
        console.log(err.message);
      } 
    };

    fetchData();
  }, []); 

  const [deleteHomeBanner] = useDeleteHomeBannerMutation();

  const handleDeleteHomeBanner = async (id) => {
    const res = await deleteHomeBanner(id);
    if (res.data.status === "Success") {
      alert("Do you want to delete");
    }
    console.log(res);
  };

  return (
    <PageLayout>
      <Row>
        <Col xl={12}>
          <div className="mc-card">
            <div className="mc-card-header">
              <Button variant="primary" onClick={handleShow}>
                ADD +
              </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="text-center p-3">
                <Modal.Title className="w-100">Home Banner</Modal.Title>
              </Modal.Header>
              <Modal.Body className="p-2 text-center">
                <form onSubmit={onFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="image1" className="form-label">
                      Upload Image 1
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image1"
                      name="image1"
                      accept="image/*"
                      onChange={handleChange1}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image2" className="form-label">
                      Upload Image 2
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image2"
                      name="image2"
                      accept="image/*"
                      onChange={handleChange2}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image3" className="form-label">
                      Upload Image 3
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image3"
                      name="image3"
                      accept="image/*"
                      onChange={handleChange3}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image4" className="form-label">
                      Upload Image 4
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image4"
                      name="image4"
                      accept="image/*"
                      onChange={handleChange4}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image5" className="form-label">
                      Upload Image 5
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image5"
                      name="image5"
                      accept="image/*"
                      onChange={handleChange5}
                    />
                  </div>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </form>
              </Modal.Body>
            </Modal>

            {/* <UsersTableComponent thead={users.thead} tbody={users.tbody} /> */}

            <div className="mc-table-responsive">
              <table className="mc-table">
                <thead className="mc-table-head primary">
                  <tr>
                    {thead.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="mc-table-body even">
                  {data?.map((item, index) => (
                    <tr key={index}>
                      {/* <td title="id">
                        <div className="mc-table-check">
                          <input
                            type="checkbox"
                            name={item.name}
                            checked={item?.isChecked || false}
                            onChange={handleCheckbox}
                          />
                          <p>#{index + 1}</p>
                        </div>
                      </td> */}

                      <td>
                        <div className="mc-table-icon role">
                          <img
                            src={`https://photo-editing-backend.onrender.com/${item.image1}`}
                            alt=""
                            width={80}
                            height={60}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="mc-table-icon role">
                          <img
                            src={`https://photo-editing-backend.onrender.com/${item.image2}`}
                            alt=""
                            width={80}
                            height={60}
                          />
                        </div>
                      </td>
                      <td>
                        <img
                          src={`https://photo-editing-backend.onrender.com/${item.image3}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>

                      <td>
                        <img
                          src={`https://photo-editing-backend.onrender.com/${item.image4}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>

                      <td>
                        <img
                          src={`https://photo-editing-backend.onrender.com/${item.image5}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>
                      <td>
                        <div className="mc-table-action">
                          <ButtonComponent
                            title="Edit"
                            className="material-icons edit"
                            onClick={() => {
                              handleShow1(); // Open the edit modal
                              setUpdateId(item.Id);
                            }}
                          >
                            <FiEdit />
                          </ButtonComponent>

                          <ButtonComponent
                            title="Block"
                            onClick={() => handleDeleteHomeBanner(item.Id)}
                          >
                            <MdDelete color="red" />
                          </ButtonComponent>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton className="text-center p-3">
                  <Modal.Title className="w-100">Home Banner</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-2 text-center">
                  <form onSubmit={onFormEdit}>
                    <div className="mb-3">
                      <label htmlFor="image1" className="form-label">
                        Upload Image 1
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image1"
                        name="image1"
                        accept="image/*"
                        onChange={handleChange1}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image2" className="form-label">
                        Upload Image 2
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image2"
                        name="image2"
                        accept="image/*"
                        onChange={handleChange2}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image3" className="form-label">
                        Upload Image 3
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image3"
                        name="image3"
                        accept="image/*"
                        onChange={handleChange3}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image4" className="form-label">
                        Upload Image 4
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image4"
                        name="image4"
                        accept="image/*"
                        onChange={handleChange4}
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="image5" className="form-label">
                        Upload Image 5
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image5"
                        name="image5"
                        accept="image/*"
                        onChange={handleChange5}
                      />
                    </div>
                    <Button type="submit" variant="primary">
                      update
                    </Button>
                  </form>
                </Modal.Body>
              </Modal>

              <Modal show={blockModal} onHide={() => setBlockModal(false)}>
                <div className="mc-alert-modal">
                  <i className="material-icons">new_releases</i>
                  <h3>are your sure!</h3>
                  <p>Want to block this user's account?</p>
                  <Modal.Footer>
                    <ButtonComponent
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setBlockModal(false)}
                    >
                      {t("close")}
                    </ButtonComponent>
                    <ButtonComponent
                      type="button"
                      className="btn btn-danger"
                      onClick={() => setBlockModal(false)}
                    >
                      {t("block")}
                    </ButtonComponent>
                  </Modal.Footer>
                </div>
              </Modal>
            </div>
            <PaginationComponent />
          </div>
        </Col>
      </Row>
    </PageLayout>
  );
};

export default HomeBanner;
