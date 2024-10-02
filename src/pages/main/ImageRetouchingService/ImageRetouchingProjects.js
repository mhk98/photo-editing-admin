import React from "react";
import { useContext, useEffect, useState } from "react";
import { Row, Col, Dropdown, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import PageLayout from "../../../layouts/PageLayout";
import { ButtonComponent } from "../../../components/elements";
import { TranslatorContext } from "../../../context/Translator";
import { PaginationComponent } from "../../../components";
import { useCreateClippingPathProjectsMutation, useDeleteClippingPathProjectsMutation, useGetAllClippingPathProjectsQuery, useUpdateClippingPathProjectsMutation } from "../../../features/ClippingPathService/clippingPathProjects/clippingPathProjects";

const ImageRetouchingProjects = () => {
  const thead = ["image",  "action"];

  const { t } = useContext(TranslatorContext);

  const [editModal, setEditModal] = React.useState(false);
  const [blockModal, setBlockModal] = React.useState(false);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [image, setImage] = useState("");
  const [file, setFile] = useState("");

  const [bannerData, setBannerData] = useState([]);
  const [updateId, setUpdateId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  }

 


  const [createClippingPathProjects] = useCreateClippingPathProjectsMutation();

  const onFormSubmit = async () => {
    const formData = new FormData();

    formData.append("image", image);
   
    try {
      const res = await createClippingPathProjects(formData);
      if (res) {
        toast.success(res.info.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [updateClippingPathProjects] = useUpdateClippingPathProjectsMutation();

  const onFormEdit = async () => {
    const formData = new FormData();

    formData.append("image", image);
    
    try {
      const res = await updateClippingPathProjects({ id: updateId, data: formData });
      if (res) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [homeBannerData, setHomeBannerData] = useState([]);

  const { data, isLoading, isError, error } = useGetAllClippingPathProjectsQuery();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching health data", error);
    } else if (!isLoading) {
      if (data) {
        setHomeBannerData(data.data);
      }
    }
  }, [data, isLoading, isError, error]);

  const [deleteClippingPathProjects] = useDeleteClippingPathProjectsMutation();

  const handleDeleteHomeBanner = async (id) => {
    const res = await deleteClippingPathProjects(id);
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
                      Upload Image 
                    </label>
                    <input
                      className="form-control"
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                      onChange={handleChange}
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
                            src={`http://localhost:5000/${item.image}`}
                            alt=""
                            width={80}
                            height={60}
                          />
                        </div>
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
                      <label htmlFor="image" className="form-label">
                        Upload Image 
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
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

export default ImageRetouchingProjects;
