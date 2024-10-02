import React, { useContext, useEffect, useState } from "react";
import { TranslatorContext } from "../../context/Translator";
import { Row, Col, Dropdown } from "react-bootstrap";
import { PaginationComponent } from "../../components";
import PageLayout from "../../layouts/PageLayout";
import { Modal, Form } from "react-bootstrap";
import { AnchorComponent, ButtonComponent } from "../../components/elements";
export default function UserListPage() {
  const thead = [
    "name",
    "role",
    "email",
    "password",
    "phone",
    "status",
    "created",
    "action",
  ];
  const tbody = [
    {
      role: { icon: "person", text: "member" },
      src: "images/avatar/01.webp",
      name: "mahmudul hasan",
      email: "miron@gmail.com",
      password: "$2a$06$4Uoeanolkkpo8gBDNIYt6eid0Qm8cCwsYU5VwaQcBsB6KISR1kwf2",
      phone: "o1838288389",
      status: "approved",
      created: "15/06/2022 14:02",
      action: { edit: "edit", block: "block", view: "visibility" },
    },
    {
      role: { icon: "settings", text: "admin" },
      src: "images/avatar/02.webp",
      name: "labonno khan",
      email: "labonno@gmail.com",
      password: "$2a$06$4Uoeanolkkpo8gBDNIYt6eid0Qm8cCwsYU5VwaQcBsB6KISR1kwf2",
      phone: "o1838288389",
      status: "pending",
      created: "15/06/2022 14:02",
      action: { edit: "edit", block: "block", view: "visibility" },
    },
    {
      role: { icon: "person", text: "member" },
      src: "images/avatar/03.webp",
      name: "tahmina bonny",
      email: "tahmina@gmail.com",
      password: "$2a$06$4Uoeanolkkpo8gBDNIYt6eid0Qm8cCwsYU5VwaQcBsB6KISR1kwf2",
      phone: "o1838288389",
      status: "blocked",
      created: "15/06/2022 14:02",
      action: { edit: "edit", block: "block", view: "visibility" },
    },
    {
      role: { icon: "store", text: "vendor" },
      src: "images/avatar/04.webp",
      name: "shariful khandakar",
      email: "shariful@gmail.com",
      password: "$2a$06$4Uoeanolkkpo8gBDNIYt6eid0Qm8cCwsYU5VwaQcBsB6KISR1kwf2",
      phone: "o1838288389",
      status: "approved",
      created: "15/06/2022 14:02",
      action: { edit: "edit", block: "block", view: "visibility" },
    },
    {
      role: { icon: "settings", text: "admin" },
      src: "images/avatar/05.webp",
      name: "farzana dolon",
      email: "farzana@gmail.com",
      password: "$2a$06$4Uoeanolkkpo8gBDNIYt6eid0Qm8cCwsYU5VwaQcBsB6KISR1kwf2",
      phone: "o1838288389",
      status: "pending",
      created: "15/06/2022 14:02",
      action: { edit: "edit", block: "block", view: "visibility" },
    },
    {
      role: { icon: "school", text: "founder" },
      src: "images/avatar/06.webp",
      name: "saikul azam",
      email: "saikul@gmail.com",
      password: "$2a$06$4Uoeanolkkpo8gBDNIYt6eid0Qm8cCwsYU5VwaQcBsB6KISR1kwf2",
      phone: "o1838288389",
      status: "blocked",
      created: "15/06/2022 14:02",
      action: { edit: "edit", block: "block", view: "visibility" },
    },
  ];

  const { t } = useContext(TranslatorContext);

  const [data, setData] = useState([]);
  const [userData, setUserData] = React.useState("");
  const [editModal, setEditModal] = React.useState(false);
  const [blockModal, setBlockModal] = React.useState(false);

  useEffect(() => {
    setData(tbody);
  }, [tbody]);

  const handleCheckbox = (event) => {
    const { name, checked } = event.target;

    if (name === "allCheck") {
      const checkData = data?.map((item) => {
        return { ...item, isChecked: checked };
      });
      setData(checkData);
    } else {
      const checkData = data?.map((item) =>
        item.name === name ? { ...item, isChecked: checked } : item
      );
      setData(checkData);
    }
  };
  return (
    <PageLayout>
      <Row>
        <Col xl={12}>
          <div className="mc-card">
            <div className="mc-card-header">
              <Dropdown bsPrefix="mc-dropdown"></Dropdown>
            </div>

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
                      <td title={item.name}>
                        <div className="mc-table-profile">
                          <img src={item.src} alt={item.alt} />
                          <p>{item.name}</p>
                        </div>
                      </td>
                      <td title={item.role}>
                        <div className="mc-table-icon role">
                          {item.role.text === "vendor" && (
                            <i className="material-icons yellow">
                              {item.role.icon}
                            </i>
                          )}
                          {item.role.text === "member" && (
                            <i className="material-icons green">
                              {item.role.icon}
                            </i>
                          )}
                          {item.role.text === "admin" && (
                            <i className="material-icons purple">
                              {item.role.icon}
                            </i>
                          )}
                          {item.role.text === "founder" && (
                            <i className="material-icons blue">
                              {item.role.icon}
                            </i>
                          )}
                          <span>{item.role.text}</span>
                        </div>
                      </td>
                      <td title={item.email}>{item.email}</td>
                      <td title={item.password}>{item.password}</td>
                      <td title={item.phone}>{item.phone}</td>
                      <td title={item.status}>
                        {item.status === "approved" && (
                          <p className="mc-table-badge green">{item.status}</p>
                        )}
                        {item.status === "pending" && (
                          <p className="mc-table-badge purple">{item.status}</p>
                        )}
                        {item.status === "blocked" && (
                          <p className="mc-table-badge red">{item.status}</p>
                        )}
                      </td>
                      <td title={item.created}>{item.created}</td>
                      <td>
                        <div className="mc-table-action">
                          <AnchorComponent
                            to="/user-profile"
                            title="View"
                            className="material-icons view"
                          >
                            {item.action.view}
                          </AnchorComponent>
                          <ButtonComponent
                            title="Edit"
                            className="material-icons edit"
                            onClick={() =>
                              setEditModal(true, setUserData(item))
                            }
                          >
                            {item.action.edit}
                          </ButtonComponent>
                          <ButtonComponent
                            title="Block"
                            className="material-icons block"
                            onClick={() => setBlockModal(true)}
                          >
                            {item.action.block}
                          </ButtonComponent>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <Modal
                show={editModal}
                onHide={() => setEditModal(false, setUserData(""))}
              >
                <div className="mc-user-modal">
                  <img src={userData.src} alt={userData?.alt} />
                  <h4>{userData?.name}</h4>
                  <p>{userData?.email}</p>
                  <Form.Group className="form-group inline mb-4">
                    <Form.Label>{t("role")}</Form.Label>
                    <Form.Select>
                      <option value="founder">{t("founder")}</option>
                      <option value="admin">{t("admin")}</option>
                      <option value="member">{t("member")}</option>
                      <option value="client">{t("client")}</option>
                      <option value="vendor">{t("vendor")}</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="form-group inline">
                    <Form.Label>{t("status")}</Form.Label>
                    <Form.Select>
                      <option value="approved">{t("approved")}</option>
                      <option value="pending">{t("pending")}</option>
                      <option value="blocked">{t("blocked")}</option>
                    </Form.Select>
                  </Form.Group>
                  <Modal.Footer>
                    <ButtonComponent
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setEditModal(false)}
                    >
                      {t("close_popup")}
                    </ButtonComponent>
                    <ButtonComponent
                      type="button"
                      className="btn btn-success"
                      onClick={() => setEditModal(false)}
                    >
                      {t("save_changes")}
                    </ButtonComponent>
                  </Modal.Footer>
                </div>
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
}
