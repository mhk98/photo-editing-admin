import React from "react";
import { useContext, useEffect, useState } from "react";
import { TranslatorContext } from "../../context/Translator";
import { Row, Col, Dropdown, Button } from "react-bootstrap";
import { PaginationComponent } from "../../components";
import PageLayout from "../../layouts/PageLayout";
import { Modal, Form } from "react-bootstrap";
import { ButtonComponent } from "../../components/elements";

import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import {
  useCreateHomeSliderMutation,
  useDeleteHomeSliderMutation,
  useGetAllHomeSliderQuery,
  useUpdateHomeSliderMutation,
} from "../../features/homeSlider/homeSlider";
const HomeSlider = () => {
  const thead = ["image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9", "image10", "image11", "image12", "action"];

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
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [image9, setImage9] = useState("");
  const [image10, setImage10] = useState("");
  const [image11, setImage11] = useState("");
  const [image12, setImage12] = useState("");
  const [file1, setFile1] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");
  const [file5, setFile5] = useState("");
  const [file6, setFile6] = useState("");
  const [file7, setFile7] = useState("");
  const [file8, setFile8] = useState("");
  const [file9, setFile9] = useState("");
  const [file10, setFile10] = useState("");
  const [file11, setFile11] = useState("");
  const [file12, setFile12] = useState("");

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
  function handleChange6(e) {
    setFile6(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage6(e.target.files[0]);
    }
  }
  function handleChange7(e) {
    setFile7(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage7(e.target.files[0]);
    }
  }
  function handleChange8(e) {
    setFile8(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage8(e.target.files[0]);
    }
  }
  function handleChange9(e) {
    setFile9(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage9(e.target.files[0]);
    }
  }
  function handleChange10(e) {
    setFile10(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage10(e.target.files[0]);
    }
  }
  function handleChange11(e) {
    setFile11(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage11(e.target.files[0]);
    }
  }
  function handleChange12(e) {
    setFile12(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage12(e.target.files[0]);
    }
  }

  const [createHomeSlider] = useCreateHomeSliderMutation();

  const onFormSubmit = async () => {
    const formData = new FormData();

    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);
    formData.append("image5", image5);
    formData.append("image6", image6);
    formData.append("image7", image7);
    formData.append("image8", image8);
    formData.append("image9", image9);
    formData.append("image10", image10);
    formData.append("image11", image11);
    formData.append("image12", image12);

    console.log("homeSlider", formData);
    try {
      const res = await createHomeSlider(formData);
      if (res) {
        toast.success(res.info.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [updateHomeSlider] = useUpdateHomeSliderMutation();

  const onFormEdit = async () => {
    const formData = new FormData();

    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    formData.append("image4", image4);
    formData.append("image5", image5);
    formData.append("image6", image6);
    formData.append("image7", image7);
    formData.append("image8", image8);
    formData.append("image9", image9);
    formData.append("image10", image10);
    formData.append("image11", image11);
    formData.append("image12", image12);
    try {
      const res = await updateHomeSlider({ id: updateId, data: formData });
      if (res) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [homeBannerData, setHomeBannerData] = useState([]);

  const { data, isLoading, isError, error } = useGetAllHomeSliderQuery();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching health data", error);
    } else if (!isLoading) {
      if (data) {
        setHomeBannerData(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [deleteHomeSlider] = useDeleteHomeSliderMutation();

  const handleDeleteHomeBanner = async (id) => {
    const res = await deleteHomeSlider(id);
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
                  <div className="mb-3">
                    <label htmlFor="image6" className="form-label">
                      Upload Image 6
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image6"
                      name="image6"
                      accept="image/*"
                      onChange={handleChange6}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image7" className="form-label">
                      Upload Image 7
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image7"
                      name="image7"
                      accept="image/*"
                      onChange={handleChange7}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image8" className="form-label">
                      Upload Image 8
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image8"
                      name="image8"
                      accept="image/*"
                      onChange={handleChange8}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image9" className="form-label">
                      Upload Image 9
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image9"
                      name="image9"
                      accept="image/*"
                      onChange={handleChange9}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image10" className="form-label">
                      Upload Image 10
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image10"
                      name="image10"
                      accept="image/*"
                      onChange={handleChange10}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image11" className="form-label">
                      Upload Image 11
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image11"
                      name="image11"
                      accept="image/*"
                      onChange={handleChange11}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image12" className="form-label">
                      Upload Image 12
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image12"
                      name="image12"
                      accept="image/*"
                      onChange={handleChange12}
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
                  {homeBannerData?.map((item, index) => (
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
                            src={`https://api.pixamoss.com/${item.image1}`}
                            alt=""
                            width={80}
                            height={60}
                          />
                        </div>
                      </td>
                      <td>
                        <div className="mc-table-icon role">
                          <img
                            src={`https://api.pixamoss.com/${item.image2}`}
                            alt=""
                            width={80}
                            height={60}
                          />
                        </div>
                      </td>
                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image3}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>

                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image4}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>

                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image5}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>
                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image6}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>
                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image7}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>
                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image8}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>
                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image9}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>
                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image10}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>
                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image11}`}
                          alt=""
                          width={80}
                          height={60}
                        />
                      </td>
                      <td>
                        <img
                          src={`https://api.pixamoss.com/${item.image12}`}
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

                    <div className="mb-3">
                    <label htmlFor="image6" className="form-label">
                      Upload Image 6
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image6"
                      name="image6"
                      accept="image/*"
                      onChange={handleChange6}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image7" className="form-label">
                      Upload Image 7
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image7"
                      name="image7"
                      accept="image/*"
                      onChange={handleChange7}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image8" className="form-label">
                      Upload Image 8
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image8"
                      name="image8"
                      accept="image/*"
                      onChange={handleChange8}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image9" className="form-label">
                      Upload Image 9
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image9"
                      name="image9"
                      accept="image/*"
                      onChange={handleChange9}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image10" className="form-label">
                      Upload Image 10
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image10"
                      name="image10"
                      accept="image/*"
                      onChange={handleChange10}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image11" className="form-label">
                      Upload Image 11
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image11"
                      name="image11"
                      accept="image/*"
                      onChange={handleChange11}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="image12" className="form-label">
                      Upload Image 12
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image12"
                      name="image12"
                      accept="image/*"
                      onChange={handleChange12}
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

export default HomeSlider;
